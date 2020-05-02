import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Navbar from "../components/Navbar";
import SectionPhoto from "../components/SectionPhoto";
import Arrow from "./Arrow/Arrow";

import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  textDiv: {
    background: "#E7E3DC",
    height: "30rem",
    width: "30rem",
    position: "relative"
  },
  text: {
    padding: "2rem",
    display: "block",
    textAlign: "initial",
    paddingTop: 0,
    whiteSpace: "pre-wrap"
  }
});

const InfoText2 = ({ classes, title, size, text, titleStyle, hClass }) => {
  return (
    <div style={{ marginRight: "-15px", zIndex: 2 }}>
      <div className={classes.textDiv} style={size}>
        <Typography variant="h1" className={hClass} style={titleStyle}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="div" className={classes.text}>
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(InfoText2);
