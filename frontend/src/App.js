import React from 'react';
import logo from './logo.svg';
import './App.css';
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
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import { createBrowserHistory } from "history";


// function dab (userName, roomName){
//   console.log("gg");
//     fetch('http://localhost:5000/userRoute/addUser', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       "username": userName,
//       "roomname": roomName,
//     })
//   });
// }
// function dab (userName, roomName){
//   console.log("gg");
//     fetch('http://localhost:5000/addUser', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       "username": userName,
//       "roomname": roomName,
//     })
//   });
// }


const useStyles = makeStyles((theme) => ({
  // bg: {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  // },
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #AEE387 30%, #83D6E2 90%)',
    // background: 'linear-gradient(180deg, #213651 30%, #3A5D78 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(150, 150, 150, .3)',
    color: 'white',
    height: '100%',
    padding: '0 30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#213651',
  }
}));

document.body.style = 'linear-gradient(180deg, #213651 30%, #3A5D78 90%)';


//----- some routing functions

export const history = createBrowserHistory();

function App() {
  const classes = useStyles();
  return (

    <Router history={history}>
      <div className={classes.root}>
        <Container maxWidth="sm">
          <div style={{ padding: 20 }}>
            {/* <Grid container spacing={5}>
              <div style={{ marginLeft: "40%", marginTop: "50%" }}>
                <Grid item xs={12}>
                  <StyledTextField id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" borderColor="white">Create Room</Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" borderColor="white" onClick={() => history.push('/home')}>Join Room</Button>
                </Grid>
              </div>
            </Grid> */}
            <ul>
              <li>
                <Link to="/">Signin</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div >
      {/* <Route path='/' component={Signin}></Route>
      <Route path='/home' component={Home}></Route> */}

    </Router>
  );
}
export default App;
