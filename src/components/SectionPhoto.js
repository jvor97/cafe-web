import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  mainPhotoDiv: {
    border: "15px solid #004A2F",
    height: "80%",
    width: "27%"
  }
});

const SectionPhoto = ({ classes, image, margin,...props }) => {
  return (
    <div className={`${classes.mainPhotoDiv} ${margin}`}>
      <img src={image} className="img-cover" />
    </div>
  );
};

export default withStyles(styles)(SectionPhoto);
