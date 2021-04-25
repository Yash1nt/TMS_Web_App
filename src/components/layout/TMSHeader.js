import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';

import tmslogo from '../../assets/img/TMS-Logo.jpg';


const useStyles = makeStyles(
    theme => (
        {
            toolbarMargin: {
                ...theme.mixins.toolbar,
                marginBottom: "3em",
                [theme.breakpoints.down("md")]: {
                    marginBottom: "2em"
                },
                [theme.breakpoints.down("xs")]: {
                    marginBottom: "1.25em"
                }
            },
            logo: {
                height: "8em",
                [theme.breakpoints.down("md")]: {
                    height: "7em"
                }, [theme.breakpoints.down("xs")]: {
                    marginBottom: "5.5em"
                }
                //  width: "4em"
            },
            logoContainer: {
                padding: 0,
                "&:hover": {
                    backgroundColor: "transparent"
                }

            },
            tabContainer: {
                marginLeft: 'auto'
            },
            tab: {
                ...theme.typography.tab,
                minWidth: 10,
                marginLeft: "25px"
            },
            menu: {
                backgroundColor: theme.palette.common.arcBlue,
                color: "white",
                borderRadius: 0

            },
            menuItem: {
                ...theme.typography.tab,
                opacity: 0.7,
                "&:hover": {
                    opacity: 1
                }
            },
            drawerIcon: {
                height: "50px",
                width: "50px"
            },
            drawerIconContainer: {
                marginLeft: "auto",
                "&:hover": {
                    backgroundColor: "transparent"
                }
            },
            drawer: {
                backgroundColor: theme.palette.common.arcBlue,

                borderRadius: 0
            },

            drawerItem: {
                ...theme.typography.tab,
                color: "white"
            },
            drawerItemSelected: {
                opacity: 1
            },
            appbar: {
                zIndex: theme.zIndex.modal + 1
            },
            menutoolbar: {
                backgroundColor: theme.palette.common.arcOrange,


            },
        }
    )
);


export default function TMSHeader() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);


    return (
        <AppBar>
            <Toolbar>
                <Button component={Link} to="/" classsName={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
                    <img alt="Tast Management System" className={classes.logo} src={tmslogo} />
                </Button>

            </Toolbar >
        </AppBar>
    );
}