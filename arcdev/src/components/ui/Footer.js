import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import footerAdornment from "../../assets/Footer_Adornment.svg";

const socialMediaInfo = [
  {
    name: "facebook",
    svg: facebook,
    link: "https://www.facebook.com",
  },
  {
    name: "twitter",
    svg: twitter,
    link: "https://www.twitter.com",
  },
  {
    name: "instagram",
    svg: instagram,
    link: "https://www.instagram.com",
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 3102,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "0.75em",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3.5em",
    width: "3.5em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = (props) => {
  const { setSelectedIndex, setValue } = props;
  const elvisUI = useStyles();
  return (
    <footer className={elvisUI.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={elvisUI.mainContainer}>
          {/* 1st Grid Column */}
          <Grid item className={elvisUI.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                className={elvisUI.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          {/* 2nd Grid Column */}
          <Grid item className={elvisUI.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
                item
                className={elvisUI.link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to="/customsoftware"
                item
                className={elvisUI.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={elvisUI.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                to="/websites"
                item
                className={elvisUI.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          {/* 3rd Grid Column */}
          <Grid item className={elvisUI.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={elvisUI.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={elvisUI.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={elvisUI.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={elvisUI.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          {/* 4th Grid Column */}
          <Grid item className={elvisUI.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={elvisUI.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={elvisUI.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={elvisUI.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          {/* 5th Grid Column */}
          <Grid item className={elvisUI.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                component={Link}
                onClick={() => setValue(4)}
                to="/contact"
                item
                className={elvisUI.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={elvisUI.adornment}
        src={footerAdornment}
        alt="Footer Image"
      />

      {/* Social Media Icons  */}
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={elvisUI.socialContainer}
      >
        {socialMediaInfo.map((sc,index) => {
          const { svg, link, name } = sc;
          return (
            <Grid
              item
              key={index}
              component={"a"}
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={svg} alt={`${name} logo`} className={elvisUI.icon} />
            </Grid>
          );
        })}
      </Grid>
    </footer>
  );
};

export default Footer;
