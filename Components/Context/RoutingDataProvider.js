import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const RoutingData = createContext();

const RoutingDataProvider = ({ children }) => {
  const [clickCards, setClickCards] = useState(true);
  const [data, setData] = useState("nnnn");

  useEffect(() => {
    setClickCards(true);
  }, []);

  return (
    <RoutingData.Provider value={{ clickCards, setClickCards, data }}>
      {children}
    </RoutingData.Provider>
  );
};

export default RoutingDataProvider;
