import React, { createContext } from "react";

export const TopContext = createContext(0);

export const TopProvider = ({ children }) => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const value = { backToTop };

  return <TopContext.Provider value={value}>{children}</TopContext.Provider>;
};
