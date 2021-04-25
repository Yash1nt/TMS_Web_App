import React from "react";
import Dashboard from "../components/dashboard/Dashboard";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./layout/Theme";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}  >
      <BrowserRouter>
        <Dashboard />
        <Switch>
          <Route exact path="/" component={() => <div>My Daily Task</div>} />
          <Route exact path="/onetimeactivity" component={() => <div>My One Time Activity</div>} />
          <Route exact path="/onboarding" component={() => <div>My Onboarding </div>} />
          <Route exact path="/utility" component={() => <div>My Utility </div>} />
          <Route exact path="/knowledge" component={() => <div>My Knowledge </div>} />
          <Route exact path="/temp1" component={() => <div>Temp1 </div>} />
          <Route exact path="/temp2" component={() => <div>Temp2 </div>} />
          <Route exact path="/temp3" component={() => <div>Temp3 </div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
