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
    tab:{
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
      textTransform: 'none',
    },
    estimate:{
      fontFamily: "Pacifico",
      fontSize:"1rem",
      textTransform: 'none',
      color:'#fff',
    }
  },
  
});
