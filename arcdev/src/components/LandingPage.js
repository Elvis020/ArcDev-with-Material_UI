import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";
import { Grid, Button } from "@material-ui/core";
import { ButtonArrow } from "../components/ui";

// Setting up useStyles
const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
  const elvisUI = useStyles();

  // For react-lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      perserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <div>
                Bringing West Coast Technology <br /> to the Midwest{" "}
              </div>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained">
                    Learn More
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </>
  );
};

export default LandingPage;
