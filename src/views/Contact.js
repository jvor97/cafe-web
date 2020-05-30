import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

import InfoText from "../components/InfoText";
import PhotoGrid from "../components/PhotoGrid";
import ArrowShort from "../components/UI/Arrow/ArrowShort";
import SocialMediaIcons from "../components/UI/SocialMediaIcons";

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
    position: "relative",
    marginLeft: "-15px"
  }
});

const Contact = ({ classes, justifyCont, ...props }) => {
  const size = {
    height: "24rem",
    width: "33.4rem"
  };

  const text =
    "lun.-vie.: 8:30–21:00 \nvie.-sab.: 8:30–00:00 \ndom.: 8:30-21.00 \n\nRESERVACIONES: \n610 56 23 90 \nmanager@cafenomad.com";

  return (
    <Paper style={{ position: "relative" }} elevation={0} id="Contacto">
      <div className="vertical-align-middle" style={{ padding: "10% 0" }}>
        <div className={classes.photoBackground}>
          <div className={classes.mainPhotoDiv}>
            <div className="img-cover">
              <div className="img-cover">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=calle%20de%20la%20cruz&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  className="img-cover"
                  title="map"
                ></iframe>
                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </div>
        </div>
        <InfoText
          title="Horario de apertura"
          size={size}
          text={text}
          hClass="h1-left"
          titleStyle={{ fontSize: "190%", whiteSpace: "nowrap" }}
        />
        <ArrowShort
          style={{
            transform: "rotate(90deg) translate(35.5%)",
            top: "-1.4%",
            right: "-3%"
          }}
        />
        <SocialMediaIcons
          style={{ right: 0, bottom: 0, marginRight: "1.8%" }}
        />
      </div>
      <PhotoGrid />
    </Paper>
  );
};

export default withStyles(styles)(Contact);
