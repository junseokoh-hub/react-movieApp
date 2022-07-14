import React, { createContext } from "react";
import { getItemfromLocalStorage, onLogout } from "../LocalStorage";
import { useSetRecoilState } from "recoil";
import { LoginAtom } from "../Recoil/LoginAtom";

export const LoginContext = createContext({});

export const LogoutProvider = ({ children }) => {
  const setLogin = useSetRecoilState(LoginAtom);
  const getLogout = (e) => {
    e.preventDefault();
    onLogout();
    setLogin(getItemfromLocalStorage() !== null);
  };

  return (
    <LoginContext.Provider value={{ getLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
