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
  menu:{
    backgroundColor: theme.palette.common.blue,
    color: '#fff',
    borderRadius: "0px",
  },
  menuItem:{
    ...theme.typography.tab,
    opacity: .7,
    "&:hover" : {
      opacity: 1
    }
  }
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
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
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
              classes={{paper: elvisUI.menu}}
              elevation={0}
            >
              <MenuItem component={Link} classes={{root: elvisUI.menuItem}} to='/services' onClick={() => {handleClose(); setValue(1)}}>Services</MenuItem>
              <MenuItem component={Link} classes={{root: elvisUI.menuItem}} to='/customsoftware' onClick={() => {handleClose(); setValue(1)}}>Custom Software Development</MenuItem>
              <MenuItem component={Link} classes={{root: elvisUI.menuItem}} to='/mobileapps' onClick={() => {handleClose(); setValue(1)}}>Mobile App Development</MenuItem>
              <MenuItem component={Link} classes={{root: elvisUI.menuItem}} to='/websites' onClick={() => {handleClose(); setValue(1)}}>Website Development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={elvisUI.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
