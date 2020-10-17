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

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

dab("s", "g");
function dab (userName, roomName){
  console.log("fg");
  axios.post('http://localhost:5000/users/addUser', {
    username: userName,
    roomCode: roomName
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
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

function App() {
  const classes = useStyles();
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       AMENO
    //     </p>
    //   </header>
    // </div>

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Room Code" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Enter
          </Button>
        </Grid>
      </Grid>
    </div>
    //   {/* <Container maxWidth="sm" style={{ marginLeft: "40%", marginTop: "20%" }}> */}
    //     {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
    //     {/* <form className={classes.root} noValidate autoComplete="off"> */}
    //       {/* <TextField id="outlined-basic" label="Name" variant="outlined" /> */}
    //       {/* <TextField id="outlined-basic" label="Room Code" variant="outlined" /> */}
    //     {/* </form> */}
    //   {/* </Container> */}


    // <form className={classes.root} noValidate autoComplete="off">
    //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    // </form>
  );
}

export default App;
