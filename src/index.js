import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import "./index.css";
import App from "./App";

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
