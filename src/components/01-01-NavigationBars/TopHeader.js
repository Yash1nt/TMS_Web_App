import React from "react";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { withStyles } from '@material-ui/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import tmslogo from '../../assets/img/TMS-Logo.jpg';


const styles = ({ spacing, theme, breakpoints, palette, shape }) => (

    {
        toolbarMargin: {

            marginBottom: "3",
            [breakpoints.down("md")]: {
                marginBottom: "3"
            },
            [breakpoints.down("xs")]: {
                marginBottom: "1.25"
            },
            backgroundColor: "#65B6F7"
        },
        logo: {
            marginBottom: "auto",
            height: "4em",
            [breakpoints.down("md")]: {
                marginBottom: "auto"
            }, [breakpoints.down("xs")]: {
                marginBottom: "auto"
            }
            //  width: "4em"
        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }


        }
    }
);


const TopHeader = ({ classes, screen }) => (
    <>
        <AppBar position="fixed">
            <Toolbar disableGutters className={classes.toolbarMargin}  >
                <img alt="Tast Management System" className={classes.logo} src={tmslogo} />
            </Toolbar >
        </AppBar>
    </>

);

export default withStyles(styles)(TopHeader);