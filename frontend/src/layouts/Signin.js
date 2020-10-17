import React from "react";
import { Button } from '@material-ui/core';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Table from "../components/Table/Table.js";
import Tasks from "../components/Tasks/Tasks.js";
import CustomTabs from "../components/CustomTabs/CustomTabs.js";
import Danger from "../components/Typography/Danger.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import backgroundImage1 from "../assets/svg/bg4.svg";

//routing
import {createBrowserHistory} from 'history';
import {hist} from '../index';
import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const history = createBrowserHistory();
const useStyles = makeStyles(styles);

export default function Signin() {
  const classes = useStyles();
  return (
    <div style ={{
        backgroundImage: "url(" + backgroundImage1 + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }}>
          
    </div>
  );
}
