import React from 'react';
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

function Signin() {
    return (
        <div>
            <Grid container spacing={5}>
                <div style={{ marginLeft: "40%", marginTop: "50%" }}>
                    <p>hiii sign in pls</p>
                    <Grid item xs={12}>
                        <StyledTextField id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" borderColor="white">Create Room</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" borderColor="white">Join Room</Button>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
export default Signin;