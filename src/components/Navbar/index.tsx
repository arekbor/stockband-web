import React from "react";
import "./style.css";
import { AppBar, Box, Toolbar } from "@mui/material";
import logo from "@assets/images/logo-stockband.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar className="navbar-bg">
        <Toolbar>
          <Box
            component={"img"}
            alt="stockband-logo"
            src={logo}
            sx={{ height: 80 }}
          ></Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
