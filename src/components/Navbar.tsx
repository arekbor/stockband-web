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
} from "@mui/material";
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
  appBar: {
    position: "sticky",
  },

  navbarRightSideItems: {
    marginLeft: "auto",
    color: "inherit",
  },
  navbarLeftSideItems: {
    marginLeft: 10,
    color: "inherit",
  },

  drawerMain: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 350,
      boxSizing: "border-box",
    },
  },
  drawerCancelButton: {
    display: "flex",
    justifyContent: "flex-end",
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

  const mainDrawerListItems = [
    {
      icon: <Home />,
      route: common.RouteUrls.Dashboard,
      name: "Dashboard",
    },
    {
      icon: <AccountTree />,
      route: "",
      name: "Projects",
    },
    {
      icon: <MusicNote />,
      route: "",
      name: "Tracks",
    },
  ];

  const footerDrawerListItems = [
    {
      icon: <ChatBubble />,
      route: "",
      name: "Give me feedback",
    },
  ];

  const footerDrawerGridItems = [
    { to: "", name: "About" },
    { to: "", name: "Docs" },
    { to: "", name: "Help" },
    { to: "", name: "Status" },
  ];

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>

          <Box className={classes.navbarLeftSideItems}>
            <Typography>Dashboard</Typography>
          </Box>

          <Box className={classes.navbarRightSideItems}>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer className={classes.drawerMain} anchor="left" open={open}>
        <Grid container padding={2}>
          <Grid item xs={12}>
            <Box className={classes.drawerCancelButton}>
              <IconButton onClick={handleDrawerClose}>
                <Cancel />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <List>
          {mainDrawerListItems.map((item, idx) => (
            <ListItem>
              <ListItemButton key={idx}>
                <ListItemIcon key={idx}>{item.icon}</ListItemIcon>
                <Link
                  to={item.route}
                  className={mainClasses.link}
                  onClick={handleDrawerClose}
                >
                  {item.name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List style={{ marginTop: `auto` }}>
          <Divider />
          {footerDrawerListItems.map((item, idx) => (
            <ListItem>
              <ListItemButton key={idx}>
                <ListItemIcon key={idx}>{item.icon}</ListItemIcon>
                <Link
                  to={item.route}
                  className={mainClasses.link}
                  onClick={handleDrawerClose}
                >
                  {item.name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>

        <Grid container padding={1} fontSize={"small"} textAlign={"center"}>
          {footerDrawerGridItems.map((item, idx) => (
            <Grid item xs={3} key={idx}>
              <Link to={item.to} className={mainClasses.link}>
                {item.name}
              </Link>
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="caption" color={"grey"} marginLeft={1}>
              2023 &copy; Stockband Inc.
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
