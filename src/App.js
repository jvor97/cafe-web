import React from "react";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./views/Home";
import theme from "./muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
