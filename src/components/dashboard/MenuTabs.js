import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Link } from "react-router-dom";

export default function MenuTabs({ routeTabs, parentClasses, value, handleChagne }) {
    return (<Tabs className={parentClasses.tabContainer} value={value} onChange={handleChagne} >
        {
            routeTabs.map((routeOpt, index) => (
                <Tab
                    key={index}
                    style={{ textTransform: 'none' }}
                    className={parentClasses.tab}
                    component={Link}
                    to={routeOpt.link}
                    label={routeOpt.name}
                    disableRipple
                />
            ))
        }
    </Tabs>
    )
}