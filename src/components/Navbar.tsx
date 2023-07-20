import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  Grid,
  Divider,
  ListItemText,
} from "@mui/material";
import logo from "@assets/images/logo-stockband.png";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountTree,
  Cancel,
  ChatBubble,
  Home,
  MusicNote,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import common from "@utils/common";
import { useMainStyles } from "@utils/styles/mainStyles";

const useStyles = makeStyles({
  navbarBg: {
    background: "#40356f!important",
  },
  navbarLogoImg: {
    height: 80,
  },

  navbarItems: {
    marginLeft: "auto",
    color: "inherit",
  },
  buttonItem: {
    marginLeft: 5,
  },

  drawerMain: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 350,
      boxSizing: "border-box",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const mainClasses = useMainStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar className={classes.navbarBg} position="fixed">
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar src={logo}></Avatar>
          <Typography>Dashboard</Typography>

          <Box className={classes.navbarItems}>
            <Avatar></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawerMain}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Grid container padding={2}>
          <Grid item xs={6}>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <Avatar src={logo} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <IconButton onClick={handleDrawerClose}>
                <Cancel />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <Link
                to={common.RouteUrls.Dashboard}
                className={mainClasses.link}
                onClick={handleDrawerClose}
              >
                Dashboard
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <Link
                to={common.RouteUrls.Dashboard}
                className={mainClasses.link}
                onClick={handleDrawerClose}
              >
                Projects
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MusicNote />
              </ListItemIcon>
              <Link
                to={common.RouteUrls.Dashboard}
                className={mainClasses.link}
                onClick={handleDrawerClose}
              >
                Tracks
              </Link>
            </ListItemButton>
          </ListItem>
        </List>

        <List style={{ marginTop: `auto` }}>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ChatBubble />
              </ListItemIcon>
              <ListItemText>Give me feedback</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
        <Grid container padding={1} fontSize={"small"}>
          <Grid item xs={12}>
            <Typography variant="caption" color={"grey"}>
              2023 &copy; Stockband Inc.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Link to={""}>About</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to={""}>Docs</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to={""}>Status</Link>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
