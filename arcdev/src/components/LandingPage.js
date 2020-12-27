import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import {Link} from 'react-router-dom';

import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";
import animationData from "../animations/landingAnimation/data";
import { ButtonArrow, CallToAction } from "../components/ui";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import customSoftwareIcon from "../assets/Custom_Software_Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackgroundImg from "../assets/repeatingBackground.svg";
import infoBackgroundImg from "../assets/infoBackground.svg";

// Setting up useStyles
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "3.5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
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
    marginTop: "9em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
      padding: 25,
    },
  },
  serviceContainer1: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "6em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = (props) => {
  const {setValue, setSelectedIndex} = props;
  const elvisUI = useStyles();
  const theme = useTheme();
  // For media queries
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // For react-lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container className={elvisUI.mainContainer} direction="column">
      <Grid item>
        {" "}
        {/* ------ Hero Block ------- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          {/* Text */}
          <Grid className={elvisUI.heroTextContainer} sm item>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br /> to the Midwest{" "}
            </Typography>
            <Grid
              justify="center"
              className={elvisUI.buttonContainer}
              container
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  onClick={() => setValue(5)}
                  className={elvisUI.estimateButton}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  onClick={() => setValue(2)}
                  className={elvisUI.learnButtonHero}
                  variant="outlined"
                >
                  <span style={{ marginRight: 6 }}> Learn More </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Animation */}
          <Grid className={elvisUI.animation} sm item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
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
              onClick={() => {setValue(1); setSelectedIndex(0);}}
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
      {/* ------ iOS/Android App Development Block------- */}
      <Grid item style={{ margin: "0 0.5em" }}>
        <Grid
          container
          justify={(matchesSM && "center") || "flex-end"}
          direction="row"
          className={elvisUI.serviceContainer}
        >
          {/* First Item */}
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
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
              onClick={() => {setValue(1); setSelectedIndex(1);}}
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/* ------ Websites Block------- */}
      <Grid item style={{ margin: "0 0.5em" }}>
        <Grid
          container
          justify={matchesSM && "center"}
          direction="row"
          className={elvisUI.serviceContainer}
        >
          {/* First Item */}
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM && "center",
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
              onClick={() => {setValue(1); setSelectedIndex(2);}}
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
          <Grid item>
            <img
              className={elvisUI.icon}
              src={websitesIcon}
              alt="Website Icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Revolution Block */}

      <Grid item>
        <Grid
          container
          style={{ height: "45em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={elvisUI.revolutionCard}>
            <CardContent>
              <Grid
                container
                style={{ textAlign: "center" }}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    className={elvisUI.learnButtonHero}
                    variant="outlined"
                    onClick={() => setValue(2)}
                    component={Link}
                    to="/revolution"
                  >
                    <span style={{ marginRight: 6 }}> Learn More </span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={elvisUI.revolutionBackground} />
        </Grid>
      </Grid>

      {/* Information Block */}
      <Grid
        container
        alignItems="center"
        style={{ height: "40em" }}
        direction="row"
      >
        <Grid
          style={{
            position: "absolute",
            textAlign: matchesXS ? "center" : "inherit",
          }}
          item
          container
          // spacing={matchesXS ? 3 : 0}
          direction={matchesXS ? "column" : "row"}
        >
          {/* About Us I */}
          <Grid
            sm
            style={{ marginLeft: matchesXS ? 0 : matchesSM ? "1.5em" : "5em" }}
            item
          >
            <Grid container direction="column">
              <Typography style={{ color: "#fff" }} variant="h2">
                About Us
              </Typography>
              <Typography variant="subtitle2">Lets get personal</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  onClick={() => setValue(3)}
                  style={{ color: "#fff", borderColor: "#fff" }}
                  className={elvisUI.learnButton}
                >
                  <span style={{ marginLeft: 6 }}> Learn More </span>
                  <ButtonArrow width={10} height={10} fill="#fff" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* About Us II */}
          <Grid
            sm
            style={{
              marginRight: matchesXS ? 0 : matchesSM ? "1.5em" : "5em",
              marginTop: matchesXS && "1.5em",
              textAlign: matchesXS ? "center" : "right",
            }}
            item
          >
            <Grid container direction="column">
              <Typography style={{ color: "#fff" }} variant="h2">
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say hello!
                <span role="img" aria-label="waving hand">
                  👋🏿
                </span>{" "}
              </Typography>
              <Grid item>
                <Button
                component={Link}
                to='/contact'
                onClick={() => setValue(4)}
                  variant="outlined"
                  style={{ color: "#fff", borderColor: "#fff" }}
                  className={elvisUI.learnButton}
                >
                  <span style={{ marginRight: 6 }}> Learn More </span>
                  <ButtonArrow width={10} height={10} fill="#fff" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={elvisUI.infoBackground} />
      </Grid>

      {/* CallToAction Block */}
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
