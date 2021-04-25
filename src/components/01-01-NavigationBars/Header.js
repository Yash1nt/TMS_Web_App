import React, { useState, useEffect } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, ListItemIcon } from "@material-ui/core";
const styles = ({ spacing, theme, breakpoints, palette, shape }) => (

    {
        toolbarMargin1: {

            marginBottom: "auto",
            [breakpoints.down("md")]: {
                marginBottom: "auto"
            },
            [breakpoints.down("xs")]: {
                marginBottom: "1.25em"
            }
        },
        tabContainer1: {
            marginLeft: "auto"
        },
        tab1: {
            minWidth: 10,
            marginLeft: "25px"
        }

    }
);

const Header = ({ routeTabs, classes, screen, value, handleChagne, handleDrawerOpen }) => (
    <>
        <AppBar position='relative' className={classes.subHeaderMargin} style={{background: '#E3F3FF'}}>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"

                >

                    <MenuIcon />
                </IconButton>
                <Tabs className={classes.tabContainer} value={value} onChange={handleChagne} >
                    {
                        routeTabs.map((routeOpt) => (
                            <Tab
                                style={{textTransform: 'none'}}
                                className={classes.tab}
                                component={Link}
                                to={routeOpt.link}
                                label={routeOpt.name}
                                disableRipple
                            />
                        ))
                    }
                </Tabs>

            </Toolbar>
        </AppBar>
    </>
);
export default withStyles(styles)(Header);


