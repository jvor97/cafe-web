import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const styles = theme => ({
  wrapper: {
    position: "absolute"
  },
  outerBox: {
    background: "#e7e3dc",
    paddingRight: "2.3rem",
    paddingLeft: 0
  },
  innerBox: {
    width: "8.75rem",
    height: "8.75rem"
  }
});

const FilmPhoto = ({
  classes,
  rotate,
  rotateBox,
  photos,
  position,
  ...props
}) => {
  return (
    <div className={classes.wrapper} style={position}>
      <Box
        display="flex"
        p={2}
        className={classes.outerBox}
        style={rotateBox ? rotateBox : rotate}
      >
        <Box pr={2} className={classes.innerBox}>
          <img src={`${photos}3.jpg`} className="img-cover" style={rotate} />
        </Box>
        <Box className={classes.innerBox} pr={4.4}>
          <img src={`${photos}2.jpg`} className="img-cover" style={rotate} />
        </Box>
        <Box
          className={classes.innerBox}
          style={{
            transform: "scale(1.3)"
          }}
        >
          <img src={`${photos}1.jpg`} className="img-cover" style={rotate} />
        </Box>
      </Box>
    </div>
  );
};

export default withStyles(styles)(FilmPhoto);
