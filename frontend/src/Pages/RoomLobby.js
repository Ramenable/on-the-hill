import React, { useState, useEffect } from 'react';
//import './RoomLobby.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import { BrowserRouter as Switch, Redirect, useHistory, useLocation, History, Link } from "react-router-dom";

import axios from "axios";

var currentRoom;
var memberList;
var groceryList;
var user;

async function addGrocery() {
  const newGrocery = await axios.post('https://grocerynode.herokuapp.com/groceries/addGrocery', {
    name: document.getElementById('name').value,
    roomCode: currentRoom,
    message: document.getElementById('message').value,
    requester: user,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function deleteGrocery(idvalue) {
  var idV = idvalue;
  const oldGrocery = await axios.post('https://grocerynode.herokuapp.com/groceries/deleteGrocery', {
    id: idV,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: 300,
    maxWidth: 800,
    borderRadius: 5,
    boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, .3)',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  fullScreen: {
    flexGrow: 1,
  },
  fill: {
  	width: '100%',
    flexGrow: 1,
  },
  textMem: {
    color: '#222222',
    fontFamily: 'Raleway',
    fontSize: 20,
  },
  text: {
    color: '#222222',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textReq: {
    color: '#222222',
    fontFamily: 'Raleway',
    fontStyle: 'italic',
    fontSize: 20,
  },
  title: {
  	color: '#444444',
  	fontFamily: 'Raleway',
    fontSize: 43,
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

function RoomLobby() {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  
  // room and user data
  user = location.state.user;
  currentRoom = location.state.number;

  // member list data 
  const [items, setItems] = useState([]);

  // grocery list data 
  const [gItems, setGItems] = useState([]);

  //re-render on add grocery
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    axios.get('https://grocerynode.herokuapp.com/rooms/getRoom' + '?room=' + encodeURIComponent(location.state.number), false)
	.then((response) => {
	    console.log(response.data);
	    memberList = response.data[0].members;
	    setItems(memberList);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

  }, [location.state.number]);
  useEffect(() => {
  	if(gItems.length && !alert) {
      return;
    }
  	axios.get('https://grocerynode.herokuapp.com/groceries/getGroceries' + '?room=' + encodeURIComponent(location.state.number), false)
	.then((response) => {
	    groceryList = []
	    for(var i in response.data) {
	    	groceryList.push(response.data[i]);
	    }
	    setGItems(groceryList);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});

  }, [alert, gItems, location.state.number]);

  // Add grocery
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAdd = () => {
    setOpen(false);
    addGrocery();
    setAlert(true);
  };
  
  //back
  const routeChange = () =>{ 
    let path = "/"; 
    history.push(path);
  }

  return (
   <Grid container spacing={4} style={{ marginTop: "3%", marginLeft: "8%"}} className={classes.fullScreen}>
    <Grid item xl={3} >
  	<div className={classes.root}>
            <Typography variant="h3" className={classes.title} style={{ marginLeft: "8%" }}>Member List</Typography>
            <Divider />
            <Paper style={{maxHeight: 550, overflow: 'auto'}}>
          	<List>
        		{items.map((item, index) => (
          		<ListItem key={index} item={item} className={classes.centered}>
        			<ListItemText classes={{primary:classes.textMem}} primary= {item} />
          		</ListItem>
      			))}
      		</List>
      		</Paper>
    </div>
    <div className={classes.root} style={{ marginTop: "5%"}}>
      <Button fullWidth={true} variant="outlined" color="secondary" bordercolor="white" onClick={routeChange}>Go Back</Button>
    </div>
    </Grid>

    <Grid item xl={9} className={classes.fullScreen}>
    <div className={classes.root}>
        <Typography variant="h3" className={classes.title} style={{ marginLeft: "35%" }}>Grocery List</Typography>
        <Divider />
        <Paper style={{maxHeight: 550, overflow: 'auto'}}>
        <List>
        	{gItems.map((item, index) => (
          	<ListItem key={index} item={item} className={classes.centered}>
          	    <Grid container spacing={3} >
    			<Grid item xs={6} style={{ overflow: "hidden"}} >
        			<ListItemText classes={{primary:classes.text}} primary= {item.name} secondary= {item.message}/>
        		</Grid>
        		<Grid item xs={4} >
        		    <ListItemText classes={{primary:classes.textReq}} style={{marginTop: '6%'}} primary= {"Requested by: " + item.requester} />
        		</Grid>
        		<Grid item xs={2} >
        		    <IconButton aria-label="cancel" style={{width: '70%', height: '70%', marginTop: '3%'}} onClick={() => deleteGrocery(item._id)}>
        				<CancelIcon style={{width: '70%', height: '70%'}}/>
     				</IconButton>
        		</Grid>
        		</Grid>
          	</ListItem>
      		))}
      	</List>
        </Paper>

      <Button fullWidth={true} variant="contained" color="primary" onClick={handleClickOpen}>
        Add grocery
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Grocery</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Put the grocery name and a message if you want!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Grocery Name"
            type="typename"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message (optional)"
            type="typemessage"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Grid>
    </Grid>
  )
}
export default RoomLobby;