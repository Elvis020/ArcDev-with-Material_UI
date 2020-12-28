import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { ButtonArrow } from "./ui";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Icons Import
import customSoftwareIcon from "../assets/Custom_Software_Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: ".4em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
      padding: 25,
    },
  },
  serviceContainer1: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
      padding: 25,
    },
  },
}));

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  // Setting up styles using materialUI
  const elvisUI = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: (matchesSM && 0) || "5em",
          marginTop: (matchesSM && "1em") || "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {/* ------ iOS/Android App Development Block------- */}
      <Grid item style={{ margin: "0 0.5em" }}>
        <Grid
          container
          justify={(matchesSM && "center") || "flex-end"}
          direction="row"
          className={elvisUI.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          {/* First Item */}
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: !matchesSM && "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={elvisUI.subtitle}>
              Extend functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {!matchesSM && <br />}with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={elvisUI.learnButton}
            >
              <span style={{ marginRight: 6 }}> Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          {/* Second Icon */}
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={elvisUI.icon}
              src={mobileAppsIcon}
              alt="Mobile Phone Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* ------ Custom Software Block ------- */}
      <Grid item style={{ margin: "0 0.5em" }}>
        <Grid
          container
          justify={matchesSM && "center"}
          direction="row"
          className={elvisUI.serviceContainer1}
        >
          {/* First Item */}
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={elvisUI.subtitle}>
              Save Energy, Save Time, Save Money.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={elvisUI.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              className={elvisUI.learnButton}
            >
              <span style={{ marginRight: 6 }}> Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          {/* First Icon */}
          <Grid item>
            <img
              className={elvisUI.icon}
              src={customSoftwareIcon}
              alt="Custom software Icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* ------ Websites Block------- */}
      <Grid item style={{ margin: "0 0.5em" }}>
        <Grid
          container
          justify={(matchesSM && "center") || "flex-end"}
          direction="row"
          className={elvisUI.serviceContainer}
          style={{ marginBottom: "5em" }}
        >
          {/* First Item */}
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: !matchesSM && "35em",
            }}
          >
            <Typography variant="h4">WebsiteDevelopment</Typography>
            <Typography variant="subtitle1" className={elvisUI.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="subtitle1">
              Optimized for Search Engines, built for speed{" "}
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              className={elvisUI.learnButton}
            >
              <span style={{ marginRight: 6 }}> Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          {/* Third Icon */}
          <Grid style={{ marginRight: matchesSM ? 0 : "5em" }} item>
            <img
              className={elvisUI.icon}
              src={websitesIcon}
              alt="Website Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
