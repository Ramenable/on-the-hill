import React, { useState, useEffect } from 'react';
//import './RoomLobby.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

import { BrowserRouter as Redirect, useHistory, useParams, useLocation, History } from "react-router-dom";
import { createBrowserHistory } from "history";

import axios from "axios";

var memberList;

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
    width: '100%',
    maxWidth: 360,
    borderRadius: 5,
    boxShadow: '0px 5px 5px 2px rgba(0, 0, 0, .3)',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    color: '#222222',
    fontFamily: 'Raleway',
    fontWeights: 'bold',
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

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function RoomLobby() {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
  	axios.get('http://localhost:5000/rooms/getRoom' + '?room=' + encodeURIComponent(location.state.number), false)
	.then((response) => {
	    console.log(response.data);
	    memberList = response.data[0].members;
	    setItems(memberList);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
  }, []);

  const routeChange = () =>{ 
    let path = "/"; 
    history.push(path);
  }

  return (
  	<div className={classes.root} style={{ marginLeft: "-60%", marginBottom: "25%", marginTop: "15%", marginRight: "10%" }}>
  	   <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title} style={{ marginLeft: "15%" }}>Member List</Typography>
            <Divider />
          	<List>
        		{items.map((item, index) => (
          		<ListItem key={index} item={item} className={classes.centered}>
        			<ListItemText classes={{primary:classes.text}} primary= {item} />
          		</ListItem>
      			))}
      		</List>
          </Grid>
          <Grid item xs={12} className={classes.titlecontent}>
            <Button variant="outlined" bordercolor="white" onClick={routeChange}>Go Back</Button>
          </Grid>
        </Grid>
    </div>
  )
}
export default RoomLobby;