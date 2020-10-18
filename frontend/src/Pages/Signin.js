import React from 'react';
import './Signin.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

// import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, History, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import axios from "axios";

function createUserRoom(){
  axios.post('http://localhost:5000/users/makeUser', {
    username: document.getElementById('userNameVal').value,
    roomCode: document.getElementById('roomCodeVal').value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  var array = ["room", document.getElementById('userNameVal').value]
  axios.post('http://localhost:5000/rooms/addRoom', {
    roomCode: document.getElementById('roomCodeVal').value,
    members: array,
    numMembers: 1,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

function updateUserRoom(){
  axios.post('http://localhost:5000/users/makeUser', {
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
// .grid-container{
//   display: grid;
//   grid-row-gap: 50 px;
// }

function Signin() {
  return (
    <Grid container spacing={3}>
      <div style={{ marginLeft: "28%", marginTop: "20%", marginBottom: "100%", marginRight: "28%" }}>
        <Grid item xs={12} style={{padding: "5%"}} >
          <StyledTextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} style={{padding: "5%"}} >
          <StyledTextField id="outlined-basic" label="Room Code" variant="outlined" />
        </Grid>
        <Grid item xs={12} style={{padding: "5%", marginLeft: "14%"}} >
          <Button variant="outlined" borderColor="white">Create Room</Button>
        </Grid>
        <Grid item xs={12} style={{padding: "5%", marginLeft: "19%"}} >
          <Button variant="outlined" borderColor="white">Join Room</Button>
        </Grid>
      </div>
    </Grid>
  )
}
export default Signin;