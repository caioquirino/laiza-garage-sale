import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config/Apollo";

import "./index.css";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send("pageview");
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
