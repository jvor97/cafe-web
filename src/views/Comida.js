import React from "react";
import Paper from "@material-ui/core/Paper";

import SectionPhoto from "../components/SectionPhoto";
import InfoText from "../components/InfoText";
import FilmPhoto from "../components/FilmPhoto";

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

export default Comida;
