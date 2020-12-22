import React,{useState} from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { Switch, Route } from "react-router-dom";

import { Header, Footer } from "./ui";

function App() {
  // For Routes
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header value={value}  setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Switch>
        <Route exact path="/"  component={() => <div style={{height: "1000px"}}>Home</div>} />
        <Route path="/services" component={() => <div>Services</div>} />
        <Route
          path="/customsoftware"
          component={() => <div>Custom Software</div>}
        />
        <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
        <Route path="/websites" component={() => <div>Websites</div>} />
        <Route path="/revolution" component={() => <div>Revolution</div>} />
        <Route path="/about" component={() => <div>About Us</div>} />
        <Route path="/contact" component={() => <div>Contact Us</div>} />
        <Route path="/estimate" component={() => <div>Estimate</div>} />
      </Switch>
      <Footer value={value}  setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </ThemeProvider>
  );
}

export default App;

// Materia ui's version of lorem ipsum
// {[...new Array(120)]
//   .map(
//     () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//   )
//   .join("\n")}
