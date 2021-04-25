import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from '@material-ui/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor
} from "../../assets/jss/material-dashboard-react.js";


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles(
  theme => (
    {
      toolbarMargin: {
        marginTop: "4em",
        //...theme.mixins.toolbar,
        marginBottom: "3em",
        color: "lightblue"
      },
      logo: {
        height: "4em",
        width: "4em"
      },
      tabContainer: {
        marginLeft: 'auto'
      },
      appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "10px",
        zIndex: "1029",
        color: grayColor[7],
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
      }
    }
  )
);
export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar disableGutters >
            <Tabs className={classes.marginLeft}>
              <Tab label="MyDailyTask" />
              <Tab label="MyOneTimeActivity" />
              <Tab label="MyOnboarding" />
              <Tab label="MyUtiility" />
              <Tab label="MyKnowledge" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
