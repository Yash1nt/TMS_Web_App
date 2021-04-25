import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';

import routeTabs from "../../assets/data/tab-options"

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

export default function TopNavBar() {
    const classes = useStyles();
    const theme = useTheme();

    const tabs = (
        <React.Fragment>
            <Tabs >
                {
                    routeTabs.map((routeOpt) => (
                        <Tab
                            component={Link}
                            to={routeOpt.link}
                            label={routeOpt.name} />

                    ))
                }
            </Tabs>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar disableGutters >
                    {tabs}
                </Toolbar>
            </AppBar>
        </React.Fragment >
    );
}