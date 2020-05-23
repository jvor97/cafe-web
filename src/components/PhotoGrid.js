import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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

const PhotoGrid = ({
  classes,
  rotate,
  rotateBox,
  photos,
  position,
  ...props
}) => {
  return (
    <div>
      <GridList
        className={classes.gridList}
        cols={5}
        spacing={12}
        style={{ background: "#004A2F", padding: "1rem 0", margin: 0 }}
      >
        {[1, 2, 3, 4, 5].map(num => (
          <GridListTile key={num} style={{ height: "25rem" }}>
            <img
              src={`../images/footer/foot${num}.jpg`}
              alt={`cafe-illustration-photo${num}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(PhotoGrid);
