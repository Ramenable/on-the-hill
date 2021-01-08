import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// routing
import Signin from "./Pages/Signin";
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
        <Container maxWidth="xl">
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
