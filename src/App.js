import React from "react";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./views/Home";
import Cafe from "./views/Cafe";
import Comida from "./views/Comida";
import theme from "./muiTheme";
import Espacio from "./views/Espacio";
import Contact from "./views/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home justifyCont="flex-start" />
        <Cafe justifyCont="flex-end" />
        <Comida justifyCont="flex-start" />
        <Espacio justifyCont="flex-end" />
        <Contact />
        <footer style={{ background: "#004A2F", paddingBottom: "1rem" }}>
          © Cafe Nomad
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
