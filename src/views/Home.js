import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Navbar from "../components/Navbar";
import SectionPhoto from "../components/SectionPhoto";
import Arrow from "../components/Arrow";

const Home = () => {
  return (
    <Paper style={{ height: "100vh" }}>
      <Navbar />
      <div className="flex-middle">
        <SectionPhoto image="../images/nomad.jpg" margin="ml-8" />
        <div style={{ width: "50%", marginLeft: "2.8rem" }}>
          <Typography variant="h1">Cafe Nomad</Typography>
        </div>
      </div>
      {/* <Arrow /> */}
    </Paper>
  );
};

export default Home;
