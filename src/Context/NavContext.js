import React, { createContext, useState } from "react";

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const value = { navOpen, setNavOpen, navToggle };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
