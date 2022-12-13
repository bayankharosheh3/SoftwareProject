import React, { useState, createContext } from "react";

export const RoutingData = createContext();

const RoutingDataProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInAs, setLoggedInAs] = useState("doctor");

  return (
    <RoutingData.Provider
      value={{ loggedIn, setLoggedIn, loggedInAs, setLoggedInAs }}
    >
      {children}
    </RoutingData.Provider>
  );
};

export default RoutingDataProvider;
