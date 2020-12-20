import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById("root")
);
