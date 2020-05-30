import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  gridList: {
    background: "#004A2F",
    padding: "1rem 0",
    margin: 0
  }
});

const PhotoGrid = (...props) => {
  const classes = useStyles();
  return (
    <div style={{ overflow: "hidden" }}>
      <GridList className={classes.gridList} cols={5} spacing={12}>
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

export default PhotoGrid;
