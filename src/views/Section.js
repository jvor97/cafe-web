import React from "react";
import Paper from "@material-ui/core/Paper";

import SectionPhoto from "../components/SectionPhoto";
import InfoText from "../components/InfoText";
import FilmPhoto from "../components/FilmPhoto";
import Arrow from "../components/UI/Arrow/Arrow";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  section: {
    height: "100vh"
  }
});
const Section = ({ sectionInfo, ...props }) => {
  const classes = useStyles();

  return (
    <Paper
      style={sectionInfo.sectionStyle && JSON.parse(sectionInfo.sectionStyle)}
      id={sectionInfo.title}
      className={classes.section}
      elevation={0}
    >
      <div
        className={`vertical-align-middle flex-end ${sectionInfo.flexReverse}`}
      >
        <InfoText
          title={sectionInfo.title}
          text={sectionInfo.text}
          size={JSON.parse(sectionInfo.textSize)}
          hClass={sectionInfo.titleClass}
          titleStyle={
            sectionInfo.titleStyle && JSON.parse(sectionInfo.titleStyle)
          }
        />
        <SectionPhoto image={sectionInfo.sectionImgSrc} />
        <FilmPhoto
          rotateBox={sectionInfo.rotateBox && JSON.parse(sectionInfo.rotateBox)}
          rotate={sectionInfo.rotate && JSON.parse(sectionInfo.rotate)}
          photos={sectionInfo.filmImgSrc}
          position={JSON.parse(sectionInfo.filmImgPosition)}
        />
        <Arrow style={JSON.parse(sectionInfo.arrowStyle)} />
      </div>
    </Paper>
  );
};

export default Section;
