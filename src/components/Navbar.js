import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
// import AppBar from "@material-ui/core/AppBar";
// import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Cafe", href: "#cafe" },
  { name: "Comida", href: "#comida" },
  { name: "Espacio", href: "#espacio" },
  { name: "Contacto", href: "#contacto" }
];

//@TODO style link in mui theme
const styles = theme => ({
  navbar: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#F0EFEA",
    height: "6rem"
  }
});

const Navbar = ({ classes, props }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <Container>
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
              <MenuItem
                alt={item.name}
                key={item.name}
                style={{ padding: "1rem" }}
              >
                <Link href={item.href}>{item.name}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Hidden>

        <Hidden only={["xs", "sm"]}>
          {menuItems.map(item => (
            <Typography
              alt={item.name}
              key={item.name}
              style={{ padding: "1rem" }}
            >
              <Link href={item.href}>{item.name}</Link>
            </Typography>
          ))}
        </Hidden>
      </Toolbar>
    </Container>
  );
};

export default withStyles(styles)(Navbar);
