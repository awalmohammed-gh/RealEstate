import { createContext, useContext, useState } from "react";
import { properties } from "../assets/house_data";

const HouseContext = createContext();
export const HouseContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [currentState, setCurrentState] = useState("login");

  const house = {
    isLoggedIn,
    setIsLoggedIn,
    properties,
    search,
    setSearch,
    currentState,
    setCurrentState,
  };
  return (
    <HouseContext.Provider value={house}>{children}</HouseContext.Provider>
  );
};

export const useHouseForm = () => useContext(HouseContext);
