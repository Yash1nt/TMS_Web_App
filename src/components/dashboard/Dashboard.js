import React, { useState, useEffect } from "react";

import Drawer from '@material-ui/core/Drawer';
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { useTheme } from "@material-ui/core/styles";

import TopHeader from "../01-01-NavigationBars/TopHeader";
import menuOptions from "../../assets/data/menu-options";
import routeTabs from "../../assets/data/tab-options";

import TMSBody from './TMSBody';

const drawerWidth = 240;

const useStyles = makeStyles(
    theme => (
        {
            toolbarMargin: {
                ...theme.mixins.toolbar,
                marginBottom: "4em",
                [theme.breakpoints.down("md")]: {
                    marginBottom: "auto"
                },
                [theme.breakpoints.down("xs")]: {
                    marginBottom: "auto"
                }
            },
            appBar: {
                marginTop: "4em",
                //  zIndex: theme.zIndex.drawer + 1,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
            appBarShift: {
                marginTop: "4em",
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },

            subHeaderMargin: {
                ...theme.mixins.toolbar,
                marginTop: "4em",
                padding: 0,


                [theme.breakpoints.down("md")]: {
                    marginBottom: "auto",
                    marginTop: "2em",
                },
                [theme.breakpoints.down("xs")]: {
                    marginBottom: "auto",
                    marginTop: "1em",
                },
                backgroundColor: "#E3F3FF"
            },
            root: {
                display: 'flex',
            },
            logo: {
                height: "5em",
                [theme.breakpoints.down("md")]: {
                    height: "4em"
                }, [theme.breakpoints.down("xs")]: {
                    marginBottom: "1.25em"
                }
                //  width: "4em"
            },
            logoContainer: {
                padding: 3,
                "&:hover": {
                    backgroundColor: "transparent"
                }

            },
            tabContainer: {
                marginLeft: 'auto',

            },
            tab: {
                ...theme.typography.tab,
                minWidth: 10,
                marginLeft: "25px",
                textTransform: 'none'
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
                marginRight: "5em",
                "&:hover": {
                    backgroundColor: "transparent"
                }
            },
            drawer: {
                backgroundColor: theme.palette.common.arcBlue,
                marginTop: "4em",
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


            }
        }
    )
);

export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChagne = (e, newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        [menuOptions, routeTabs].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`: if (value !== route.activeIndex) {
                    setValue(route.activeIndex);
                    if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                        setSelectedIndex(route.selectedIndex);
                    }
                }
                    break;
                default:
                    break;
            }
        }
        );
    }, [value, selectedIndex]);


    const drawer = (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={
                () => setOpenDrawer(false)} onOpen={
                    () => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <List>
                    {
                        routeTabs.map((routeOpt) => (
                            <ListItem
                                divider
                                button
                                component={Link}
                                to={routeOpt.link}
                                selected={value === routeOpt.activeIndex}
                            >
                                <ListItemIcon>
                                    <IconButton>
                                        <Icon>favorite</Icon>
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText className={value === routeOpt.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} primary={routeOpt.name} disableTypography />
                            </ListItem>

                        ))
                    }
                </List>
            </Drawer>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <TopHeader indicatorColor="primary" />
            <TMSBody
                routeTabs={routeTabs}
                menuOptions={menuOptions}
                value={value}
                parentClasses={classes}
                handleChagne={handleChagne}
                selectedIndex="1"
                handleDrawerOpen={() => setOpenDrawer(!openDrawer)}
            />


        </React.Fragment >
    );
}
