import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../assets/logo.svg";

// For Inline styles with Material UI
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
    "&:hover": {
      background: "transparent",
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

  // For Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
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
    setOpen(false);
    setSelectedIndex(index);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  // For Tabs
  const handleChange = (e, value) => {
    setValue(value);
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
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              className={elvisUI.tabContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={elvisUI.tab}
                label="Home"
              />
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
              open={open}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={elvisUI.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
