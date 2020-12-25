import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import animationData from "../animations/landingAnimation/data";
import { Grid, Button, Typography } from "@material-ui/core";
import { ButtonArrow } from "../components/ui";

// Setting up useStyles
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]:{
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
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "3.5em",
    [theme.breakpoints.down("md")]:{
        marginTop:"3em",
    },
    [theme.breakpoints.down("xs")]:{
        marginTop:"2em",
    },
  },
  
}));

const LandingPage = () => {
  const elvisUI = useStyles();
  const theme = useTheme();

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
    </Grid>
  );
};

export default LandingPage;
