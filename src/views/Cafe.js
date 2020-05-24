import React from "react";
import Paper from "@material-ui/core/Paper";

import SectionPhoto from "../components/SectionPhoto";
import InfoText from "../components/InfoText";
import FilmPhoto from "../components/FilmPhoto";
import Arrow from "../components/UI/Arrow/Arrow";

const Cafe = ({ justifyCont }) => {
  const size = {
    height: "36rem",
    width: "25rem"
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.";

  return (
    <Paper style={{ height: "100vh" }} id="Cafe">
      <div className={`vertical-align-middle ${justifyCont}`}>
        <InfoText title="cafe" size={size} text={text} hClass="h1-right" />
        <SectionPhoto image="../images/coffe/coffe-main.jpg" />
        <FilmPhoto
          rotateBox={{ transform: "rotate(90deg)", transformOrigin: "85px" }}
          rotate={{ transform: "rotate(-90deg)" }}
          photos="../images/coffe/coffe"
          position={{ top: 0, left: "10%" }}
        />
        <Arrow style={{ bottom: "10%", left: "-2.5%" }} />
      </div>
    </Paper>
  );
};

export default Cafe;

