import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";

const menuItems = ["Home", "Cafe", "Comida", "Espacio", "Contacto"];

//@TODO style link in mui theme
const styles = theme => ({
  navbar: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#F0EFEA",
    height: "6rem",
    zIndex: 9999
  }
});

const Navbar = ({ classes, ...props }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <Container style={{ height: "6rem" }}>
      <Toolbar className={classes.navbar}>
        <Hidden only={["lg", "xl", "md"]}>
          <IconButton onClick={event => setAnchorElNav(event.currentTarget)}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
          >
            {menuItems.map(item => (
              <MenuItem alt={item} key={item} style={{ padding: "1rem" }}>
                <Link to={item} smooth={true} duration={500}>
                  {item}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Hidden>

        <Hidden only={["xs", "sm"]}>
          {menuItems.map(item => (
            <Typography alt={item} key={item} style={{ padding: "1rem" }}>
              <Link to={item} smooth={true} duration={500}>
                {item}
              </Link>
            </Typography>
          ))}
        </Hidden>
      </Toolbar>
    </Container>
  );
};

export default withStyles(styles)(Navbar);
