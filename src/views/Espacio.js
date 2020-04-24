import React from "react";
import Paper from "@material-ui/core/Paper";

import SectionPhoto from "../components/SectionPhoto";
import InfoText from "../components/InfoText";
import FilmPhoto from "../components/FilmPhoto";

const Espacio = ({ justifyCont }) => {
  const size = {
    height: "24rem",
    width: "36.3rem",
    marginTop: "-7rem"
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

  return (
    <Paper style={{ height: "100vh" }}>
      <div className={`vertical-align-middle ${justifyCont}`}>
        <InfoText
          title="espacio"
          size={size}
          text={text}
          hClass="h1-right"
          titlePosition={{ marginLeft: "-4.33rem", boxSizing: "border-box" }}
        />
        <SectionPhoto image="../images/space/space-main.jpg" />
        <FilmPhoto
          rotateBox={{ transform: "rotate(90deg)", transformOrigin: "85px" }}
          rotate={{ transform: "rotate(-90deg)" }}
          photos="../images/coffe/coffe"
          position={{ top: 0, left: "10%" }}
        />
        {/* <div style={{ width: "50%", marginLeft: "2.8rem" }}> */}
        {/* <Typography variant="h1">Cafe Nomad</Typography>
        </div> */}
        {/* <div> */}
        {/* <InfoText size={size} title="CAFE" />
          <SectionPhoto image="../images/coffe/coffe-main.jpg" />
        </div> */}
      </div>
      {/* <Arrow /> */}
    </Paper>
  );
};

export default Espacio;