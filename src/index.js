import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = {
  bgColor: `rgb(20,20,20)`,
  boxShadow: `rgb(0 0 0 / 80%) 0px 1px 5px 2px`,
  whiteColor: "#fff",
  smallGap: "0.5em",
  darkBlueColor: "#40739e",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);
