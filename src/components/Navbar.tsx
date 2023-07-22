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
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AccountTree,
  Add,
  ArrowDropDown,
  Cancel,
  ChatBubble,
  ExitToApp,
  Home,
  LibraryAdd,
  MusicNote,
  Person,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import common from "@utils/common";
import { useMainStyles } from "@utils/styles/mainStyles";

import Menu from "@mui/material/Menu";

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

  const handleOpenLeftDrawer = () => {
    setLeftDrawerOpen(true);
  };

  const handleCloseLeftDrawer = () => {
    setLeftDrawerOpen(false);
  };

  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const handleOpenRightDrawer = () => {
    setRightDrawerOpen(true);
  };

  const handleCloseRightDrawer = () => {
    setRightDrawerOpen(false);
  };

  const [anchorAddMenuSectionEl, setAnchorAddMenuSectionEl] =
    useState<null | HTMLElement>(null);

  const handleOpenAnchorAddMenuSectionEl = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorAddMenuSectionEl(e.currentTarget);
  };

  const handleCloseAnchorAddMenuSectionEl = () => {
    setAnchorAddMenuSectionEl(null);
  };

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

  const menuAddSectionItems = [
    { icon: <MusicNote />, route: "", name: "New track" },
    { icon: <LibraryAdd />, route: "", name: "New project" },
  ];

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleOpenLeftDrawer} edge="start">
            <MenuIcon />
          </IconButton>

          <Box className={classes.navbarLeftSideItems}>
            <Typography>Dashboard</Typography>
          </Box>

          <Box className={classes.navbarRightSideItems}>
            <IconButton
              className={mainClasses.iconButtonWithoutBorderRadius}
              onClick={handleOpenAnchorAddMenuSectionEl}
            >
              <Add />
              <ArrowDropDown />
            </IconButton>

            <IconButton onClick={handleOpenRightDrawer}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        id="add-section-menu"
        anchorEl={anchorAddMenuSectionEl}
        open={Boolean(anchorAddMenuSectionEl)}
        onClose={handleCloseAnchorAddMenuSectionEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuAddSectionItems.map((item, idx) => (
          <MenuItem onClick={handleCloseAnchorAddMenuSectionEl} key={idx}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      <Drawer className={classes.drawer} anchor="left" open={leftDrawerOpen}>
        <Grid container padding={2}>
          <Grid item xs={12}>
            <Box className={classes.drawerCancelButton}>
              <IconButton onClick={handleCloseLeftDrawer}>
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
                  onClick={handleCloseLeftDrawer}
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
                  onClick={handleCloseLeftDrawer}
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
                onClick={handleCloseLeftDrawer}
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
                <Typography noWrap className={mainClasses.textHeading}>
                  Test nick
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.drawerCancelButton}>
              <IconButton onClick={handleCloseRightDrawer}>
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
                  onClick={handleCloseRightDrawer}
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
