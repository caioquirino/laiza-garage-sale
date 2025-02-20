import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";

import "./index.css";
import process from "node:process";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send("pageview");
}

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
