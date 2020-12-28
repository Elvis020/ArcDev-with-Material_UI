import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

// Setting up useStyles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.25em",
  },
}));
const CustomSoftware = (props) => {
  const elvisUI = useStyles();
  const { setValue, setSelectedIndex } = props;
  return (
    <Grid container direction="column" className={elvisUI.mainContainer}>
      <Grid item container direction="row">
        <Grid
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          item
          className={elvisUI.arrowContainer}
        >
          <IconButton
            component={Link}
            to="/services"
            style={{ backgroundColor: "transparent" }}
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back To Service Page" />
          </IconButton>
        </Grid>

        <Grid item column direction="column" className={elvisUI.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body2">
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body2">
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all, you risk falling behind competitors and missing out on
              huge savings from increased efficiency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body2">
              Our custom solutions are designed from the ground up with your
              needs, wants and goals at the core. The collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body2">
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>

        <Grid item className={elvisUI.arrowContainer}>
          <IconButton
            component={Link}
            to="/mobileapps"
            style={{ backgroundColor: "transparent" }}
            onClick={() => setSelectedIndex(2)}
          >
            <img src={forwardArrow} alt="Forward to iOS/Android App" />
          </IconButton>
        </Grid>
      </Grid>
    
    <Grid item direction='row'>
      <Grid item container direction='column'>
        <Grid item>
          <Typography variant='h4'>Save Energy</Typography>
        </Grid>
      </Grid>
    </Grid>

    </Grid>
  );
};

export default CustomSoftware;
