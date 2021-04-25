import React from 'react';
import { Route, Switch } from "react-router-dom";
import clsx from 'clsx';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import MenuTabs from './MenuTabs';

const drawerWidth = 240;
const drawerFixed = {
    display: 'block',
    position: 'relative',
    zIndex: 0
}

function MyContentPage(props) {
    return (<div style={{ padding: '10px' }}>
        {props.pageName}
    </div>)
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        ...drawerFixed
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        ...drawerFixed
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function TMSBody({ routeTabs, parentClasses, value, handleChagne }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerClose = () => {
        setOpen(!open);
    };





    return (
        <div className="tms-body">
            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                        [classes.newClass]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                            [classes.newClass]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />

                    <List>
                        {
                            routeTabs.map((routeOpt) => (
                                <ListItem
                                    divider
                                    button
                                    component={Link}
                                    to={routeOpt.link}
                                    selected={value === routeOpt.activeIndex}
                                    parentClasses={parentClasses}
                                    handleChagne={handleChagne}
                                >
                                    <ListItemIcon>
                                        {
                                            routeOpt.activeIndex === 0 ? <AssignmentIcon /> :
                                                routeOpt.activeIndex === 1 ? <AssignmentIndIcon /> :
                                                    routeOpt.activeIndex === 2 ? <MailIcon /> :
                                                        routeOpt.activeIndex === 3 ? <InboxIcon /> :
                                                            <MenuBookIcon />

                                        }
                                    </ListItemIcon>
                                    <ListItemText className={value === routeOpt.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} primary={routeOpt.name} disableTypography />
                                </ListItem>

                            ))
                        }
                    </List>

                    {/*** 
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    */}
                </Drawer>
                <main>
                    <MenuTabs
                        routeTabs={routeTabs}
                        value={value}
                        parentClasses={parentClasses}
                        handleChagne={handleChagne}
                    />
                    <Switch>
                        <Route exact path="/">
                            <MyContentPage pageName="Home page" />
                        </Route>
                        <Route exact path="/onetimeactivity">
                            <MyContentPage pageName="onetimeactivity page" />
                        </Route>
                        <Route exact path="/onboarding">
                            <MyContentPage pageName="onboarding page" />
                        </Route>
                        <Route exact path="/utility">
                            <MyContentPage pageName="utility page" />
                        </Route>
                        <Route exact path="/knowledge">
                            <MyContentPage pageName="knowledge page" />
                        </Route>
                        <Route exact path="/temp1">
                            <MyContentPage pageName="temp1 page" />
                        </Route>
                        <Route exact path="/temp2">
                            <MyContentPage pageName="temp2 page" />
                        </Route>
                        <Route exact path="/temp3">
                            <MyContentPage pageName="temp3 page" />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
}
