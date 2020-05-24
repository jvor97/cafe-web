import React from "react";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./views/Home";
import Cafe from "./views/Cafe";
import Comida from "./views/Comida";
import theme from "./muiTheme";
import Espacio from "./views/Espacio";
import Contact from "./views/Contact";
import Section from "./views/Section";

const sections = [
  {
    id: "Cafe",
    textSize: '{"height": "36rem", "width": "25rem"}',
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    title: "Cafe",
    titleClass: "h1-right",
    sectionImgSrc: "../images/coffe/coffe-main.jpg",
    filmImgSrc: "../images/coffe/coffe",
    filmImgPosition: '{"top": 0, "left": "10%"}',
    rotateBox: '{"transform": "rotate(90deg)", "transformOrigin": "85px"}',
    rotate: '{"transform": "rotate(-90deg)" }',
    arrowStyle: '{"bottom": "10%", "left": "-2.5%" }',
    sectionStyle: '{"background": "rgba(229, 229, 229, 0.42)"}'
  },
  {
    textSize: '{"height": "24rem", "width": "33.3rem", "marginTop": "-7rem"}',
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    title: "Comida",
    titleClass: "h1-left",
    sectionImgSrc: "../images/food/food-main.jpg",
    filmImgSrc: "../images/food/food",
    filmImgPosition: '{"right": 0, "bottom": "5%"}',
    rotate: '{"transform": "rotate(-180deg)"}',
    arrowStyle:
      '{"top": 0, "left": "-5%", "transform": "rotate(90deg) translate(35.5%)"}',
    flexReverse: "flex-reverse"
  },
  {
    textSize: '{"height": "24rem", "width": "36.3rem", "marginTop": "-7rem"}',
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    title: "Espacio",
    titleStyle: '{"marginLeft": "-4.33rem", "boxSizing": "border-box" }',
    titleClass: "h1-right",
    sectionImgSrc: "../images/space/space-main.jpg",
    filmImgSrc: "../images/coffe/coffe",
    filmImgPosition: '{"left": 0, "bottom": "5%"}',
    arrowStyle:
      '{"top": 0, "left": 0, "transform": "rotate(90deg) translate(35.5%)"}',
    sectionStyle: '{"background": "rgba(229, 229, 229, 0.42)"}'
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home justifyCont="flex-start" />
      <div className="App">
        {sections.map(section => (
          <Section sectionInfo={section} />
        ))}
        <Contact />
        <footer style={{ background: "#004A2F", paddingBottom: "1rem" }}>
          © Cafe Nomad
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
