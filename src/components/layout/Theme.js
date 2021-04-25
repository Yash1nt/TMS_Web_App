import { createMuiTheme } from '@material-ui/core/styles';

const tmsBlue = "#65B6F7";
const tmsSubHeader = "#A1FFFF"
const tmsOrange = "#FFBA60";
const tmsLightBlue = "#800080";
const tmsSubHeaderMenu = "#51697B"

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${tmsBlue}`,
            arcOrange: `${tmsOrange}`,
            tmsSubHeader: `${tmsSubHeader}`,
            tmsHeader: `${tmsBlue}`,
            tmsSubHeaderMenu: `${tmsSubHeaderMenu}`
        },
        header: {
            main: `{$tmsHeader}`
        },
        subheader: {
            main: `{$tmsSubHeader}`
        },
        primary: {
            main: `${tmsBlue}`
        },
        secondary: {
            main: `${tmsOrange}`
        },
        subprimary: {
            main: `${tmsLightBlue}`
        },
        subheadermenu: {
            main: `${tmsSubHeaderMenu}`
        }

    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        }
    }

});