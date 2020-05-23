import React from "react";
import Paper from "@material-ui/core/Paper";

import SectionPhoto from "../components/SectionPhoto";
import InfoText from "../components/InfoText";
import FilmPhoto from "../components/FilmPhoto";
import Arrow from "../components/UI/Arrow/Arrow";

const Comida = ({ justifyCont }) => {
  const size = {
    height: "24rem",
    width: "33.3rem",
    marginTop: "-7rem"
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.";

  return (
    <Paper style={{ height: "100vh" }}>
      <div className={`vertical-align-middle ${justifyCont}`}>
        <SectionPhoto image="../images/food/food-main.jpg" />
        <InfoText title="comida" size={size} text={text} hClass="h1-left" />
        <FilmPhoto
          rotate={{ transform: "rotate(-180deg)" }}
          photos="../images/food/food"
          position={{ bottom: "5%", right: 0 }}
        />
        <Arrow
          style={{
            transform: "rotate(90deg) translate(35.5%)",
            top: 0,
            left: "-5%"
          }}
        />
      </div>
    </Paper>
  );
};

export default Comida;
