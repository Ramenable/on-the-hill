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
// routing
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import RoomLobby from "./Pages/RoomLobby";
import { createBrowserHistory } from "history";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: 'linear-gradient(45deg, #AEE387 30%, #83D6E2 90%)',
    // background: 'linear-gradient(180deg, #213651 30%, #3A5D78 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(150, 150, 150, .3)',
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

  const routeChange = () =>{ 
    let path = '/';  
    history.push(path);
  }

  routeChange();

  return (

    <Router history={history}>
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/roomlobby/:number" component={RoomLobby} />
          </Switch>
        </Container>
      </div >
    </Router>
  );
}
export default App;
