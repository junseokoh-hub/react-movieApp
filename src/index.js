import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  bgColor: "palevioletred",
  boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.5)`,
  whiteColor: "#fff",
  smallGap: "0.5em",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
