import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Import icons
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({}));

const CustomSoftware = () => {
  const elvisUI = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        {/* Arrow */}
        <Grid item>
          <IconButton>
            <img src={backArrow} alt="Back to services page icon" />
          </IconButton>
        </Grid>

        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body1">
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>

            <Typography paragraph variant="body1">
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you need, and ultimately
              controls the way you work. Without using any software at all you
              risk falling behind competitors and missing out on huge savings
              from increased efficiency.
            </Typography>

            <Typography paragraph variant="body1">
              Our custom solutinos are designed from the ground up with your
              needs, wants and goals at the core.This collaborative process
              produces firmly tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>

            <Typography paragraph variant="body1">
              We create exacly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
      
      <Grid item>
          <IconButton>
              <img src={forwardArrow} alt="Forward Arrow Icon"/>
          </IconButton>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
