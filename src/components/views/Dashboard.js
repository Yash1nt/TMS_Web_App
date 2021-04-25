import React, { useState } from "react";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
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

import NavContentEx from "../layout/SideNavBar";
import ContentForm from "../temp/ContentForm";
import ContentEx from "../temp/ContentEx";
import FooterEx from "../temp/FooterEx";

import "../../assets/css/styles.css";

// Added by Yash
import TMSHeader from "../layout/Header";
import TMSSubHeader from "../layout/SubHeader";


const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const presets = {
  createDefaultLayout: getDefaultScheme(),
  createStandardLayout: getStandardScheme(),
  createFixedLayout: getFixedScheme(),
  createContentBasedLayout: getContentBasedScheme(),
  createCozyLayout: getCozyScheme(),
  createMuiTreasuryLayout: getMuiTreasuryScheme(),
};

function App() {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true,
  });
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
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                {/**  Commented by Yash
              {data.header && <HeaderEx />}
                **/
            <TMSHeader />  
           
            }
             </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
            <CollapseBtn />
              <SidebarContent>
              {/** 
              <NavHeaderEx collapsed={sidebar.primarySidebar.collapsed} />
               */}   
              {data.nav && <NavContentEx />}
              </SidebarContent>
              
            </DrawerSidebar>
            <Content>
                        <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                {/**  Commented by Yash
              {data.header && <HeaderEx />}
                **/
            <TMSSubHeader />  
           
            }
             </Toolbar>
            </Header>
              <ContentForm
                preset={preset}
                onChangePreset={(val) => {
                  setLoading(true);
                  setPreset(val);
                  setTimeout(() => setLoading(false), 500);
                }}
                data={data}
                onChangeData={setData}
              />
              {data.content && <ContentEx />}
            </Content>
            <Footer>{data.footer && <FooterEx />}</Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
}
export default App
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
