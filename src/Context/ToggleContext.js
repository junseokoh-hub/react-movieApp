import { createContext, useState } from "react";

export const ToggleContext = createContext({});

export const ToggleProvider = ({ children }) => {
  const [toggleVideo, setToggleVideo] = useState(false);

  const value = { toggleVideo, setToggleVideo };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
