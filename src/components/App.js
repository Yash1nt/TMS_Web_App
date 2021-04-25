import React from "react";
import Dashboard from "../components/dashboard/Dashboard";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./layout/Theme";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function MyContentPage(props) {
  return (<div style={{ padding: '10px' }}>
    {props.pageName}
  </div>)
}

function App() {
  return (
    <ThemeProvider theme={theme}  >
      <BrowserRouter>
        <Dashboard />
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
