import React, { createContext, useState } from "react";
import { getItemfromLocalStorage, onLogout } from "../LocalStorage";

export const LoginContext = createContext({});

export const LogoutProvider = ({ children }) => {
  const [login, setLogin] = useState(getItemfromLocalStorage() !== null);

  const getLogout = (e) => {
    e.preventDefault();
    onLogout();
    setLogin(getItemfromLocalStorage() !== null);
  };

  const value = { login, setLogin, getLogout };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
