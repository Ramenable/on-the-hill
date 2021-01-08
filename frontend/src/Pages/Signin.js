import React from 'react';
import './Signin.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { BrowserRouter as Switch, Redirect, useHistory, History, Link } from "react-router-dom";

import axios from "axios";

var roomExists;
var userValue;
var num;

async function createUserRoom() {
  num = document.getElementById('roomCodeVal').value;
  userValue = document.getElementById('userNameVal').value;

  var array = [ document.getElementById('userNameVal').value]
  const newRoom = await axios.post('https://grocerynode.herokuapp.com/rooms/addRoom', {
    roomCode: document.getElementById('roomCodeVal').value,
    members: array,
    numMembers: 1,
  })
  .then(function (response) {
    console.log(response);
    roomExists = false;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = true;
  });

  //no need to make an invalid user
  if (roomExists === true) {
    return;
  }

  const newUser = await axios.post('https://grocerynode.herokuapp.com/users/makeUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

async function updateUserRoom() {
  num = document.getElementById('roomCodeVal').value;
  userValue = document.getElementById('userNameVal').value;

  const newUser = await axios.post('https://grocerynode.herokuapp.com/users/makeUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
  .then(function (response) {
    console.log(response);
    roomExists = true;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = false;
  });

  if (roomExists === false) {
    return;
  }

  const updatedRoom = await axios.post('https://grocerynode.herokuapp.com/rooms/updateRoom', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value,
  })
  .then(function (response) {
    console.log(response);
    roomExists = true;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = false;
  });

}

async function returnUserRoom() {
  num = document.getElementById('roomCodeVal').value;
  userValue = document.getElementById('userNameVal').value;

  const newUser = await axios.post('https://grocerynode.herokuapp.com/users/returnUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
  .then(function (response) {
    console.log(response);
    roomExists = true;
  })
  .catch(function (error) {
    console.log(error);
    roomExists = false;
  });
}

const StyledTextField = styled(TextField)`
  label.focused {
    color: #ffffff;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #83A3BC;
    }
    &:hover fieldset {
      border-color: #294662;
    }
    &.Mui-focused fieldset {
      border-color: #294662;
    }
  }
  textInputStyle: {
    color: 'white',
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    height: 500,
    width: 400,
    margin: 'auto',
    marginTop: '5%',
    padding: '0 30px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  centeredcard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    fontFamily: 'Raleway',
    color: '#444444'
  },
  titlecontent: {
    marginBottom: -20
  },
  textbox: {
    padding: 10,
    marginTop: '1%',
    marginBottom: '1%'
  },
  centered: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

function Signin() {
  const history = useHistory();
  const classes = useStyles();

  //routing to new room
  const routeChangeCreate = async () =>{ 
   const data = await createUserRoom();
    if (roomExists === true) {
      handleClick();
    } else {
      let path = "/RoomLobby" + "/"+ num; 
      history.push(path, {number: num, user: userValue});
    }
  }

  //routing to existing room
  const routeChangeJoin = async () =>{ 
    const data = await updateUserRoom();
    if (roomExists === false) {
      handleClick1();
    } else {
      let path = "/RoomLobby" + "/"+ num; 
      history.push(path, {number: num, user: userValue});
    }
  }

   //routing to existing room that user is already in
  const routeChangeReturn = async () =>{ 
    const data = await returnUserRoom();
    if (roomExists === false) {
      handleClick2();
    } else {
      let path = "/RoomLobby" + "/"+ num; 
      history.push(path, {number: num, user: userValue});
    }
  }
  
  //error message if room exists
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //error message if room doesn't exist
  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  //error message if room doesn't exist
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  return (
    <React.Fragment>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container alignContent="center" spacing={3}>
        <div className={classes.centered}>
          <Grid item xs={12} className={classes.titlecontent} align="center" style={{marginBottom: 10, marginTop: 10}}>
            <Typography variant="h4" className={classes.title} >Group Groceries</Typography>
          </Grid>
          <Grid item xs={12} className={classes.textbox} align="center">
            <StyledTextField id="userNameVal" label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} className={classes.textbox} align="center">
            <StyledTextField id="roomCodeVal" label="Room Code" variant="outlined" />
          </Grid>
          <Grid item xs={12} align="center" >
            <Button variant="outlined" bordercolor="white" onClick={routeChangeCreate} style={{marginBottom: 10, marginTop: 10}}>Create Room</Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="outlined" bordercolor="white" onClick={routeChangeJoin} style={{marginBottom: 10, marginTop: 10}}>Join Room</Button>
          </Grid>
          <Grid item xs={12} align="center" >
            <Button variant="outlined" bordercolor="white" onClick={routeChangeReturn} style={{marginBottom: 10, marginTop: 10}}>Re-enter Room</Button>
          </Grid>
        </div>
        </Grid>
      </CardContent>
    </Card>

    <Tooltip title="Made by Abel, Ellie, John,and Nelson" style={{marginRight: '2%', marginBottom: '1%'}}>
        <Fab className={classes.absolute}>
          <HelpOutlineIcon color="primary" />
        </Fab>
    </Tooltip>

    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="The room already exists"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />

    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="This user already exists or the room doesn't exist"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose1}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />

    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open2}
      autoHideDuration={6000}
      onClose={handleClose2}
      message="User not found"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose2}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />

    </React.Fragment>
  )
}
export default Signin;