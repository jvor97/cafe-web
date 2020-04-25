import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

import InfoText from "../components/InfoText";
import PhotoGrid from "../components/PhotoGrid";

const styles = theme => ({
  mainPhotoDiv: {
    width: "calc(100% - 30px)",
    height: "calc(100% - 30px)",
    position: "absolute",
    left: "15px",
    top: "15px",
    zIndex: 3
  },
  photoBackground: {
    height: "27rem",
    width: "40rem",
    background: "#004A2F",
    zIndex: 1,
    position: "relative"
  }
});

const Contact = ({ classes, justifyCont, ...props }) => {
  const size = {
    height: "24rem",
    width: "34.3rem"
  };

  const text =
    "lun.-vie.: 8:30–21:00 \nvie.-sab.: 8:30–00:00 \ndom.: 8:30-21.00 \n\nRESERVACIONES: \n610 56 23 90 \nmanager@cafenomad.com";

  return (
    <Paper>
      <div className="vertical-align-middle" style={{ margin: "5% 0" }}>
        <div className={classes.photoBackground}>
          <div className={classes.mainPhotoDiv}>
            <img src="../images/nomad.jpg" className="img-cover" />
          </div>
        </div>
        <InfoText
          title="Horario de apertura"
          size={size}
          text={text}
          hClass="h1-left"
          titleStyle={{ fontSize: "190%" }}
        />
      </div>
      <PhotoGrid />
    </Paper>
  );
};

export default withStyles(styles)(Contact);
