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
import { IconButton, List, SwipeableDrawer, ListItem ,ListItemText} from "@material-ui/core";

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
  // For Routes
  const [value, setValue] = useState(0);

  // For Responsiveness
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  // For Swipeable Drawer
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // For Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
    },
    {
      name: "Website Development",
      link: "/websites",
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
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  // For Responsiveness
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={elvisUI.tabContainer}
      >
        <Tab component={Link} to="/" className={elvisUI.tab} label="Home" />
        <Tab
          aria-owns={anchorEl && "simple-menu"}
          aria-haspopup={anchorEl && true}
          onMouseOver={(e) => handleClick(e)}
          component={Link}
          to="/services"
          className={elvisUI.tab}
          label="Services"
        />
        <Tab
          component={Link}
          to="/revolution"
          className={elvisUI.tab}
          label="The Revolution"
        />
        <Tab
          component={Link}
          to="/about"
          className={elvisUI.tab}
          label="About Us"
        />
        <Tab
          component={Link}
          to="/contact"
          className={elvisUI.tab}
          label="Contact Us"
        />
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
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
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
      >
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/'>
            <ListItemText disableTypography >Home</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/services'>
            <ListItemText disableTypography >Services</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/revolution'>
            <ListItemText disableTypography >Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/about'>
            <ListItemText disableTypography >About Us</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/contact'>
            <ListItemText disableTypography >Contact Us</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to='/estimate'>
            <ListItemText disableTypography >Free Estimate</ListItemText>
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
        <AppBar position="fixed">
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
