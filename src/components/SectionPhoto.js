import React from "react";
import { withStyles } from "@material-ui/core/styles";

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
    height: "80%",
    width: "30%",
    background: "#004A2F",
    zIndex: 1,
    position: "relative"
  }
});

const SectionPhoto2 = ({ classes, image, ...props }) => {
  return (
    <div className={classes.photoBackground}>
      <div className={classes.mainPhotoDiv}>
        <img src={image} className="img-cover" alt=''/>
      </div>
    </div>
  );
};

export default withStyles(styles)(SectionPhoto2);
