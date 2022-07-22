import React, { createContext } from "react";
import { useSetRecoilState } from "recoil";
import { LoginAtom } from "../Recoil/LoginAtom";
import { getCookie, removeCookie } from "../Cookie";

export const LoginContext = createContext({});

export const LogoutProvider = ({ children }) => {
  const setLogin = useSetRecoilState(LoginAtom);
  const getLogout = (e) => {
    e.preventDefault();
    removeCookie("tmdbsession");
    setLogin(getCookie("tmdbsession") !== undefined);
  };

  return (
    <LoginContext.Provider value={{ getLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
