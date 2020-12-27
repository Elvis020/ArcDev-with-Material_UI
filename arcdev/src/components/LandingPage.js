import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import animationData from "../animations/landingAnimation/data";
import { Grid, Button, Typography } from "@material-ui/core";
import { ButtonArrow } from "../components/ui";
import customSoftwareIcon from "../assets/Custom_Software_Icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const LandingPage = () => {
  const elvisUI = useStyles();
  const theme = useTheme();
  // For media queries
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
                <Button className={elvisUI.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={elvisUI.learnButtonHero} variant="outlined">
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

      {/* ------ Services Block ------- */}
      <Grid item style={{ margin: "0 1em" }}>
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
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={elvisUI.subtitle}>
              Save Energy, Save Time, Save Money.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={elvisUI.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={elvisUI.learnButton}>
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
    </Grid>
  );
};

export default LandingPage;
