import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config/Apollo";

import "./index.css";

if (process.env.REACT_APP_GA_MEASUREMENT_ID !== undefined) {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
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
