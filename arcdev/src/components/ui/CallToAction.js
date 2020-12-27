import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "45em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    marginRight: "5em",
    marginLeft: "1em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const elvisUI = useStyles();
  const theme = useTheme();

  //   For Media Queries
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={elvisUI.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br /> Revolutionary Results{" "}
            </Typography>
            <Typography style={{ fontSize: "1.5rem" }} variant="subtitle2">
              Take advatage of the 21st century{" "}
            </Typography>
            <Grid justify={matchesSM && "center"} item container>
              <Button
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                variant="outlined"
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
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          onClick={() => setValue(5)}
          component={Link}
          to="/estimate"
          variant="contained"
          className={elvisUI.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
