import GlobalStyle from "./GlobalStyle";
import Routing from "./Router";
import { LogoutProvider } from "./Context/LoginContext";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <LogoutProvider>
        <Routing />
      </LogoutProvider>
    </>
  );
}

export default App;
