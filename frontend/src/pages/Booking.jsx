import { useEffect, useState } from "react";
import { useHouseForm } from "../context/HouseContextProvider";

const Booking = () => {
  const {addToBook,properties} = useHouseForm();
  const [bookData, setBookData] = useState([]);



useEffect(() =>{
const handleBooking = () => {
  const saveBook = properties.filter((property) => addToBook[property.id]);

  setBookData(saveBook);
};
handleBooking()
},[addToBook,properties])

  console.log(bookData);
  return (
    <div>
      
    </div>
  )
}

export default Booking
