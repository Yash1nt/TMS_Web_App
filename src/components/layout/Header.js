/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from '@material-ui/styles';
import tmslogo from '../../assets/img/TMS-Logo.jpg';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Link } from "react-router-dom";
import { Button, ListItemIcon } from "@material-ui/core";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "@material-ui/core/Icon";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getCollapseIcon,
  getContent,
  getFooter,

} from "@mui-treasury/layout";


import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme,
} from "@mui-treasury/layout/presets";

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

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseIcon(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const useStyles = makeStyles(
  theme => (
    {
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "0em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "0em"
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "1em"
        }
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
        marginRight: "5em",
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
export default function SubHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleChagne = (e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }


  const Header = getHeader(styled);
  const DrawerSidebar = getDrawerSidebar(styled);
  const SidebarTrigger = getSidebarTrigger(styled);
  const SidebarContent = getSidebarContent(styled);
  const CollapseBtn = getCollapseIcon(styled);
  const Content = getContent(styled);
  const Footer = getFooter(styled);



  const menuOptions = [
    { name: "MyDailyTask", link: "/", activeIndex: 0, selectedIndex: 0, },
    { name: "Temp 1", link: "/temp1", activeIndex: 0, selectedIndex: 1 },
    { name: "Temp 2", link: "/temp2", activeIndex: 0, selectedIndex: 2 },
    { name: "Temp 3", link: "/temp3", activeIndex: 0, selectedIndex: 3 }]

  const routeTabs = [{ name: "MyDailyTask", link: "/", activeIndex: 0, ariaowns: anchorEl ? "simple-menu" : undefined, ariapopup: anchorEl ? "true" : undefined, mouseover: event => handleClick(event) },
  { name: "MyOneTimeActivity", link: "/onetimeactivity", activeIndex: 1 },
  { name: "MyOnboarding", link: "/onboarding", activeIndex: 2 }, { name: "MyUtiility", link: "/utility", activeIndex: 3 },
  { name: "MyKnowledge", link: "/knowledge", activeIndex: 4 }]


  useEffect(() => {
    [...menuOptions, ...routeTabs].forEach(route => {
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
  }, [value, menuOptions, selectedIndex, routeTabs]);

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChagne} className={classes.marginLeft} indicatorColor="primary">

        {
          routeTabs.map((routeOpt) => (
            <Tab
              aria-owns={routeOpt.ariaowns}
              aria-haspopup={routeOpt.ariapopup}
              className={classes.tab}
              component={Link}
              onMouseOver={routeOpt.mouseover}
              to={routeOpt.link}
              label={routeOpt.name} />

          ))
        }
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem key={option}
            component={Link} to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => { handleMenuItemClick(event, i); setValue(i); handleClose() }}
            selected={i === selectedIndex && value === 0}
          >
            {option.name}
          </MenuItem>
        ))
        }
      </Menu>
    </React.Fragment>
  )

  const sidedrawer = (
    <React.Fragment>

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

    </React.Fragment>
  )

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

  const drawerMenu = (
    <React.Fragment>
      <Toolbar className={classes.menutoolbar} >
        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>
        {matches ? null : tabs}
      </Toolbar>

    </React.Fragment>
  )

  const headertop = (
    <React.Fragment>
      <Toolbar disableGutters className={classes.menu} >

        <img alt="Tast Management System" className={classes.logo} src={tmslogo} />

      </Toolbar>
    </React.Fragment >
  )

  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true,
  });
  const presets = {
    createDefaultLayout: getDefaultScheme(),
    createStandardLayout: getStandardScheme(),
    createFixedLayout: getFixedScheme(),
    createContentBasedLayout: getContentBasedScheme(),
    createCozyLayout: getCozyScheme(),
    createMuiTreasuryLayout: getMuiTreasuryScheme(),
  };

  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"h2"}>Changing Preset...</Typography>
    </div>
  ) : (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={presets[preset]}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              {headertop}
            </Header>
            <DrawerSidebar sidebarId="primarySidebar" >
              <CollapseBtn className={classes.menu} />
              <SidebarContent className={classes.menu}>
                {drawer}
              </SidebarContent>

            </DrawerSidebar>
            <Content>
              {drawerMenu}
              {<div>
                Hello</div>}
            </Content>
            <Footer>{<div>
              Footer</div>}</Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
}
