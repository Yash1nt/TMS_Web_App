import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";

import Dashboard from "../components/dashboard/Dashboard";
import theme from "./layout/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
