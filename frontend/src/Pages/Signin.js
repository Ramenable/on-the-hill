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
      <div style={{ marginLeft: "30%", marginTop: "30%" }}>
        <Grid item xs={12} style={{padding: "5%"}} >
          <StyledTextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <div padding='20'></div>
        <Grid item xs={12} style={{padding: "5%", align: "center"}} >
          <Button variant="outlined" borderColor="white">Create Room</Button>
        </Grid>
        <Grid item xs={12} style={{padding: "5%"}} >
          <Button variant="outlined" borderColor="white">Join Room</Button>
        </Grid>
      </div>
    </Grid>
  )
}
export default Signin;