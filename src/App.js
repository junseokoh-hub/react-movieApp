import GlobalStyle from "./GlobalStyle";
import Routing from "./Router";
import { LogoutProvider } from "./Context/LoginContext";
import React from "react";
import { TopProvider } from "./Context/TopContext";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <GlobalStyle />
      <TopProvider>
        <LogoutProvider>
          <Routing />
        </LogoutProvider>
      </TopProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
