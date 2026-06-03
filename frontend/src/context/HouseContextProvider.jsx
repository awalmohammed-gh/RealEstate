import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { plans, properties } from "../assets/house_data";
import toast from "react-hot-toast";
import { getUserInfo, logoutAccount, userAuth } from "../api/authApis";

const HouseContext = createContext();
export const HouseContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [currentState, setCurrentState] = useState("login");
  const [wishList, setWishList] = useState([]);
  const [addToBook, setAddToBook] = useState({});
  const [user, setUser] = useState(null)

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

 const logoutUser = async () => {
   try {
     const { data } = await logoutAccount();

     if (data?.success) {
       toast.success(data.message);
       setIsLoggedIn(false);
       setUser(null)
     } else {
       toast.error(data.message || "Logout failed");
     }
   } catch (error) {
     console.error(error);
     toast.error(error?.response?.data?.message || "Something went wrong");
   }
 };

const userData = async () => {
  try {
    const { data } = await getUserInfo();

    if (data?.success) {
      setUser(data.user);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

const checkUser = async () => {
  try {
    const { data } = await userAuth();

    if (data?.success) {
      await userData();
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  } catch (error) {
    console.error(error);
    setIsLoggedIn(false);
  }
};

useEffect(() => {
  checkUser();
}, []);

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
    totalAmount,
    plans,
    logoutUser,
    user,
    userData
  };
  return (
    <HouseContext.Provider value={house}>{children}</HouseContext.Provider>
  );
};

export const useHouseForm = () => useContext(HouseContext);
