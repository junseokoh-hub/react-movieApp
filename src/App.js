import GlobalStyle from "./GlobalStyle";
import Routing from "./Router";
import { LogoutProvider } from "./Context/LoginContext";
import { NavProvider } from "./Context/NavContext";
import React from "react";
import { TopProvider } from "./Context/TopContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <TopProvider>
        <NavProvider>
          <LogoutProvider>
            <Routing />
          </LogoutProvider>
        </NavProvider>
      </TopProvider>
    </>
  );
}

export default App;
