import { createMuiTheme } from "@material-ui/core/styles";

// Creating constants for main colors
const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "#fff",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 600,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Pacifico",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
    },
  },
});
