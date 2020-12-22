import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from "@material-ui/core";

// For Responsiveness
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  SwipeableDrawer,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// For Inline styles with Material UI
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    "&:hover": {
      background: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    cursor: "pointer",
  },
  logoContainer: {
    padding: 0,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "45px",
    width: "45px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

// For Elevation
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Proptypes for ElevationScroll Function
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = (props) => {
  const { selectedIndex, setSelectedIndex, value, setValue } = props;

  // For Responsiveness
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  // For Swipeable Drawer
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // For Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // Arrays for refactoring
  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];
  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl && "simple-menu",
      ariaHaspopups: anchorEl && true,
      mouseOver: (e) => handleClick(e),
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // For Tabs
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Initializing custom selector for inline Material CSS.
  const elvisUI = useStyles();

  // UseEffect for routes
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      const { link, activeIndex, selectedIndex } = route;
      switch (window.location.pathname) {
        case `${link}`:
          if (value !== activeIndex) {
            setValue(activeIndex);
            if (selectedIndex && selectedIndex !== selectedIndex) {
              setSelectedIndex(selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  // For Responsiveness
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={elvisUI.tabContainer}
      >
        {routes.map((route, i) => {
          const { name, link, ariaOwns, ariaHaspopups, mouseOver } = route;
          return (
            <Tab
              key={`${route}${i}`}
              className={elvisUI.tab}
              to={link}
              component={Link}
              label={name}
              aria-owns={ariaOwns}
              aria-haspopup={ariaHaspopups}
              onMouseOver={mouseOver}
            />
          );
        })}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={elvisUI.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: elvisUI.menu }}
        elevation={0}
        keepMounted // For SEO Optimization
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            selected={i === selectedIndex && value == 1}
            classes={{ root: elvisUI.menuItem }}
            to={option.link}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(1);
              handleClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: elvisUI.drawer }}
      >
        <div className={elvisUI.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => {
            const { name, activeIndex, link } = route;
            return (
              <ListItem
                selected={value == activeIndex}
                key={`${route}${activeIndex}`}
                divider
                button
                component={Link}
                to={link}
                classes={{ selected: elvisUI.drawer }}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(activeIndex);
                }}
              >
                <ListItemText className={elvisUI.drawerItem} disableTypography>
                  {name}
                </ListItemText>
              </ListItem>
            );
          })}
          <ListItem
            classes={{
              root: elvisUI.drawerItemEstimate,
              selected: elvisUI.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            selected={value == 5}
            to="/estimate"
          >
            <ListItemText className={elvisUI.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={elvisUI.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={elvisUI.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={elvisUI.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              onClick={() => setValue(0)}
              component={Link}
              to="/"
              className={elvisUI.logoContainer}
            >
              <img className={elvisUI.logo} src={logo} alt="Logo" />
            </Button>
            {(!matches && tabs) || drawer}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={elvisUI.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
