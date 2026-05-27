import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import SystemLayout from "../layout/SystemLayout"
import Home from "../pages/Home"
import House from "../pages/House"
import HouseDetails from "../pages/HouseDetails"
import HouseCategories from "../pages/HouseCategories"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Agents from "../pages/Agents"
import AgentsProperties from "../pages/AgentsProperties"
import Wishlist from "../pages/Wishlist"
import Booking from "../pages/Booking"

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SystemLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="listing" element={<House/>}/>
            <Route path="house-details/:id" element={<HouseDetails/>}/>
            <Route path="house-category/:category" element={<HouseCategories/>}/>
            <Route path="agent" element={<Agents/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path="booking/:type/:id" element={<Booking/>}/>
            <Route path="agent-details/:id" element={<AgentsProperties/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
      </>
    )
)

export default router;