import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, IconButton, Typography, Hidden } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";

// Setting up useStyles
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
    maxWidth: "400em",
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.25em",
  },
  itemContainer: {
    maxWidth: "30em",
  },
}));
const CustomSoftware = (props) => {
  const elvisUI = useStyles();
  const { setValue, setSelectedIndex } = props;
  // For Lottie Animation Settings
  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" md className={elvisUI.mainContainer}>
      <Grid item container direction="row">
        {/* Left Arrow Section */}
        <Hidden mdDown>
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
        </Hidden>

        {/* Custom Software Dev Section */}
        <Grid item column direction="column" className={elvisUI.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography paragraph variant="body2">
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography paragraph variant="body2">
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all, you risk falling behind competitors and missing out on
              huge savings from increased efficiency.
            </Typography>
            <Typography paragraph variant="body2">
              Our custom solutions are designed from the ground up with your
              needs, wants and goals at the core. The collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography paragraph variant="body2">
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        {/* Right Arrow Section */}
        <Hidden mdDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/mobileapps"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt="Forward Arrow Icon" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* Save Energy and Save Time Section */}
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="Light Bulb" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="Time" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="Cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" justify="space-around">
        {/* Digital Documents & Data Section */}
        <Grid item container className={elvisUI.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant="body2">
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography paragraph variant="body2">
                Billions are spent annually on the purchasing, printing and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom ine.
              </Typography>
              {/* <Typography paragraph variant="body2">
                By utilizing digital forms and documents you can remove thes
                absolete expenses, accelerate your comminucation, and help the
                Earth.
              </Typography> */}
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 300, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        {/*Scale Section*/}
        <Grid item container className={elvisUI.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align="right" variant="body2">
                Whether you're a large brand, just getting started, or taking
                off right now, out application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Root-Cause Analysis Section */}
      <Grid
        item
        container
        direction="row"
        style={{ margintTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container alignItems="center" direction="column">
          <Grid item>
            <img
              src={roots}
              alt="Tree with roots"
              hegiht="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={elvisUI.itemContainer}>
            <Typography align="center" variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Many problems are merely symptons of larger, underlying issues.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              We can help you thoroughly examine all area of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" justify="space-around">
        {/* Automation Section */}
        <Grid item container className={elvisUI.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant="body2">
                Why waste time when you don't have to?
              </Typography>
              <Typography paragraph variant="body2">
                We can help you identify processess with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography paragraph variant="body2">
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        {/* User Experience Section */}
        <Grid item container className={elvisUI.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align="right" variant="body2">
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography paragraph align="right" variant="body2">
                So why are so many pieces of software complicated, confusing and
                frustrating?
              </Typography>
              <Typography paragraph align="right" variant="body2">
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique , personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
