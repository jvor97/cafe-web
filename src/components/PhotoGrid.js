import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
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

const PhotoGrid = ({
  classes,
  rotate,
  rotateBox,
  photos,
  position,
  ...props
}) => {
  return (
    // <Grid container justify="center" spacing={3} xs={12} sm={3}>
    //   {[1, 2, 3, 4, 5].map(value => (
    //     <Grid key={value} item direction="row" justify="flex-start">
    //       <div style={{ maxHeight: "20rem" }}>
    //         <img
    //           src={`../images/footer/foot${value}.jpg`}
    //           className="img-cover"
    //         />
    //       </div>
    //     </Grid>
    //   ))}
    // </Grid>
    <div>
      <GridList
        className={classes.gridList}
        cols={5}
        spacing={12}
        style={{ background: "#004A2F", padding: "1rem 0", marginTop: "7rem" }}
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
