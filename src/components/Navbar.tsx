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
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountTree,
  Cancel,
  ChatBubble,
  ExitToApp,
  Home,
  MusicNote,
  Person,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import common from "@utils/common";
import { useMainStyles } from "@utils/styles/mainStyles";

const useStyles = makeStyles((theme: Theme) => ({
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

  drawer: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      [theme.breakpoints.up("xs")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: 400,
      },
    },
  },
  drawerCancelButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  drawerAvatar: {
    display: "flex",
    justifyContent: "flex-start",
  },
  drawerNickname: {
    marginLeft: 5,
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const mainClasses = useMainStyles();

  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const leftMainDrawerListItems = [
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

  const rightMainDrawerListItems = [
    {
      icon: <Person />,
      route: common.RouteUrls.Dashboard,
      name: "Your profile",
    },
    {
      icon: <Settings />,
      route: "",
      name: "Settings",
    },
    {
      icon: <ExitToApp />,
      route: common.RouteUrls.UserLogout,
      name: "Logout",
    },
  ];

  const leftFooterDrawerListItems = [
    {
      icon: <ChatBubble />,
      route: "",
      name: "Give me feedback",
    },
  ];

  const leftFooterDrawerGridItems = [
    { to: "", name: "About" },
    { to: "", name: "Docs" },
    { to: "", name: "Help" },
    { to: "", name: "Status" },
  ];

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={() => {
              setLeftDrawerOpen(true);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <Box className={classes.navbarLeftSideItems}>
            <Typography>Dashboard</Typography>
          </Box>

          <Box className={classes.navbarRightSideItems}>
            <IconButton onClick={() => setRightDrawerOpen(true)}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer className={classes.drawer} anchor="left" open={leftDrawerOpen}>
        <Grid container padding={2}>
          <Grid item xs={12}>
            <Box className={classes.drawerCancelButton}>
              <IconButton onClick={() => setLeftDrawerOpen(false)}>
                <Cancel />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <List>
          {leftMainDrawerListItems.map((item, idx) => (
            <ListItem>
              <ListItemButton key={idx}>
                <ListItemIcon key={idx}>{item.icon}</ListItemIcon>
                <Link
                  to={item.route}
                  className={mainClasses.link}
                  onClick={() => setLeftDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List style={{ marginTop: `auto` }}>
          <Divider />
          {leftFooterDrawerListItems.map((item, idx) => (
            <ListItem>
              <ListItemButton key={idx}>
                <ListItemIcon key={idx}>{item.icon}</ListItemIcon>
                <Link
                  to={item.route}
                  className={mainClasses.link}
                  onClick={() => setLeftDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>

        <Grid container padding={1} fontSize={"small"} textAlign={"center"}>
          {leftFooterDrawerGridItems.map((item, idx) => (
            <Grid item xs={3} key={idx}>
              <Link
                to={item.to}
                className={mainClasses.link}
                onClick={() => setLeftDrawerOpen(false)}
              >
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

      <Drawer className={classes.drawer} anchor="right" open={rightDrawerOpen}>
        <Grid container padding={2}>
          <Grid item xs={6}>
            <Box className={classes.drawerAvatar}>
              <Avatar />
              <Box className={classes.drawerNickname}>
                <Typography>Test nick</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.drawerCancelButton}>
              <IconButton onClick={() => setRightDrawerOpen(false)}>
                <Cancel />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <List>
          {rightMainDrawerListItems.map((item, idx) => (
            <ListItem>
              <ListItemButton key={idx}>
                <ListItemIcon key={idx}>{item.icon}</ListItemIcon>
                <Link
                  to={item.route}
                  className={mainClasses.link}
                  onClick={() => setRightDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
