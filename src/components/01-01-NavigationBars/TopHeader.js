import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from '@material-ui/styles';

import tmslogo from '../../assets/img/TMS-Logo.jpg';

const styles = ({ breakpoints }) => ({
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

const TopHeader = ({ classes }) => (
    <AppBar position='relative' style={{ backroundColor: '#E3F3FF' }}>
        <Toolbar disableGutters className={classes.toolbarMargin}  >
            <img alt="Tast Management System" className={classes.logo} src={tmslogo} />
        </Toolbar >
    </AppBar>
);

export default withStyles(styles)(TopHeader);
