import GlobalStyle from "./GlobalStyle";
import Routing from "./Router";
import { LogoutProvider } from "./Context/LoginContext";
import { NavProvider } from "./Context/NavContext";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavProvider>
        <LogoutProvider>
          <Routing />
        </LogoutProvider>
      </NavProvider>
    </>
  );
}

export default App;
