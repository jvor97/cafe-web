import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    position: "absolute",
    padding: "1rem"
  },
  tripadvisorIcon: {
    content: "url('../images/icons/tripadvisor.png')",
    height: "29.17px",
    width: "29.17px",
    display: "block"
  }
});

const SocialMediaIcons = ({ classes, style, ...props }) => {
  return (
    <div className={classes.iconWrapper} style={style}>
      <IconButton onClick={() => window.open("#")} style={{ display: "block" }}>
        <InstagramIcon fontSize="large" style={{ color: "black" }} />
      </IconButton>
      <IconButton onClick={() => window.open("#")} style={{ display: "block" }}>
        <FacebookIcon fontSize="large" style={{ color: "black" }} />
      </IconButton>
      <IconButton onClick={() => window.open("#")}>
        <span className={classes.tripadvisorIcon} />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(SocialMediaIcons);
