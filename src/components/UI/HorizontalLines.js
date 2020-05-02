import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  linesWrapper: {
    position: "absolute",
    top: "50%",
    width: "20rem",
    boxSizing: "border-box"
  },
  line: {
    background: "#004a2f",
    height: "3px",
    marginBottom: "1rem",
    width: "8.4rem"
  }
});

const HorizontalLines = ({ classes, style, ...props }) => {
  return (
    <div className={classes.linesWrapper}>
      <div className={classes.line}></div>
      <div className={classes.line} style={{ width: "4.2rem" }}></div>
      <div className={classes.line}></div>
    </div>
  );
};

export default withStyles(styles)(HorizontalLines);
