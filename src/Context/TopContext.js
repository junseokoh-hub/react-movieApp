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

  return (
    <TopContext.Provider value={{ backToTop }}>{children}</TopContext.Provider>
  );
};
