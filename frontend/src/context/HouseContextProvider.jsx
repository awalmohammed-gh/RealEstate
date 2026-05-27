import { createContext, useContext, useMemo, useState } from "react";
import { properties } from "../assets/house_data";

const HouseContext = createContext();
export const HouseContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [currentState, setCurrentState] = useState("login");
  const [wishList, setWishList] = useState([]);
  const [addToBook, setAddToBook] = useState({});

  const handleAddToBooking = (itemId) =>{
      setAddToBook((prev) =>({
        ...prev,
        [itemId]:true
      }))
  }

  const removeFromBooking = (itemId) =>{
     setAddToBook((prev) =>{
       const copy = {...prev};
       delete copy[itemId];
       return copy
     })
  }

const totalAmount = useMemo(() => {
  return properties.reduce((total, property) => {
    if (addToBook[property.id]) {
      const price =
        property.pricing?.amount ||
        property.pricing?.perNight ||
        property.pricing?.perMonth ||
        0;

      return total + price;
    }

    return total;
  }, 0);
}, [addToBook]);

  const house = {
    isLoggedIn,
    setIsLoggedIn,
    properties,
    search,
    setSearch,
    currentState,
    setCurrentState,
    wishList,
    setWishList,
    addToBook,
    handleAddToBooking,
    removeFromBooking,
    totalAmount
  };
  return (
    <HouseContext.Provider value={house}>{children}</HouseContext.Provider>
  );
};

export const useHouseForm = () => useContext(HouseContext);
