import React from "react";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./views/Home";
import Cafe from "./views/Cafe";
import Comida from "./views/Comida";
import theme from "./muiTheme";
import Espacio from "./views/Espacio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home justifyCont="flex-start" />
        <Cafe justifyCont="flex-end" />
        <Comida justifyCont="flex-start" />
        <Espacio justifyCont="flex-end" />
      </div>
    </ThemeProvider>
  );
}

export default App;
