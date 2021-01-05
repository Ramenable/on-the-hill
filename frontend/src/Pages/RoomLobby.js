import React from 'react';
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
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, History, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import axios from "axios";

function getUserData(){
  axios.get('http://localhost:5000/rooms/getRoom')
	.then((response) => {
	    console.log(response.data);
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

function RoomLobby() {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = "/"; 
    history.push(path);
  }
  return (
    <Grid container spacing={3}>
      <div style={{ marginLeft: "28%", marginTop: "20%", marginBottom: "100%", marginRight: "28%" }}>
        <Grid item xs={12} style={{padding: "5%", marginLeft: "15%"}} >
          <Button variant="outlined" borderColor="white" onClick={routeChange}>Go Back</Button>
        </Grid>
        <Grid item xs={12} style={{padding: "5%", marginLeft: "15%"}} >
          <Button variant="outlined" borderColor="white" onClick={getUserData}>Get Data</Button>
        </Grid>
      </div>
    </Grid>
  )
}
export default RoomLobby;