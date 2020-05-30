import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

import Navbar from "../components/Navbar";
import SectionPhoto from "../components/SectionPhoto";
import ArrowShort from "../components/UI/Arrow/ArrowShort";
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

const Home = ({ classes }) => {
  return (
    <Paper id="Home" elevation={0}>
      <Navbar />
      <HorizontalLines />
      <div
        className="vertical-align-middle"
        style={{ height: "100vh", marginTop: "-96px", marginLeft: "8.4rem" }}
      >
        <SectionPhoto image="../images/nomad.jpg" />
        <div style={{ width: "50%", marginLeft: "2.8rem" }}>
          <Typography variant="h1">Cafe Nomad</Typography>
        </div>
        <div className={classes.arrowBackground}>
          <Link to={"Cafe"} smooth={true} duration={500}>
            <ArrowShort
              style={{
                transform: "rotate(90deg) translate(31.5%)",
                right: "-5rem"
              }}
            />
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Home);
