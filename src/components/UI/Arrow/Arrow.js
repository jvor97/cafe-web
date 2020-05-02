import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  arrow: {
    position: "absolute",
    width: "20rem",
    boxSizing: "border-box",
    zIndex: 999
  },
  arrowLine: {
    marginTop: "12.3px",
    width: "18.12rem",
    background: "#004a2f",
    height: "3px",
    float: "left",
    position: "absolute",
    left: "2rem"
  },
  pointer: {
    width: "25px",
    height: "25px",
    borderTop: "3px solid #004a2f",
    borderLeft: "3px solid #004a2f",
    transform: "rotate(135deg)",
    float: "right"
  }
});

const Arrow = ({ classes, style, ...props }) => {
  return (
    <div className={classes.arrow} style={style}>
      <div className={classes.arrowLine}></div>
      <div className={classes.pointer}></div>
    </div>
  );
};

export default withStyles(styles)(Arrow);
