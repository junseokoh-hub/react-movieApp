import GlobalStyle from "./GlobalStyle";
import Routing from "./Router";
import { LogoutProvider } from "./Context/LoginContext";
import { NavProvider } from "./Context/NavContext";
import React from "react";
import { TopProvider } from "./Context/TopContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToggleProvider } from "./Context/ToggleContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToggleProvider>
        <TopProvider>
          <NavProvider>
            <LogoutProvider>
              <Routing />
            </LogoutProvider>
          </NavProvider>
        </TopProvider>
      </ToggleProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
