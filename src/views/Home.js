import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";
import SectionPhoto from "../components/SectionPhoto";
import ArrowShort from "../components/Arrow/ArrowShort";
import HorizontalLines from "../components/UI/HorizontalLines";

const styles = theme => ({
  arrowBackground: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "15rem",
    width: "5rem",
    background: "#e7e3dc"
  }
});

const Home = ({ classes, justifyCont }) => {
  return (
    <Paper style={{ height: "100vh" }}>
      <Navbar />
      <HorizontalLines />
      <div className={`vertical-align-middle ${justifyCont}`}>
        <SectionPhoto image="../images/nomad.jpg" />
        <div style={{ width: "50%", marginLeft: "2.8rem" }}>
          <Typography variant="h1">Cafe Nomad</Typography>
        </div>
        <div className={classes.arrowBackground}>
          <ArrowShort
            style={{
              transform: "rotate(90deg) translate(31.5%)",
              right: "-5rem"
            }}
          />
        </div>
      </div>
      {/* <Arrow /> */}
    </Paper>
  );
};

export default withStyles(styles)(Home);
