import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SystemLayout from "../layout/SystemLayout";
import Home from "../pages/Home";
import House from "../pages/House";
import HouseDetails from "../pages/HouseDetails";
import HouseCategories from "../pages/HouseCategories";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AgentsProperties from "../pages/AgentsProperties";
import Wishlist from "../pages/Wishlist";
import Booking from "../pages/Booking";
import MyBookingPage from "../pages/MyBookingPage";
import BecomeAgent from "../pages/AgentPages/BecomeAgent";
import AgentLayout from "../layout/Agent/AgentLayout";
import AgentOverview from "../pages/AgentDashboard/AgentOverview";
import AgentAddProduct from "../pages/AgentDashboard/AgentAddProduct";
import Agents from "../pages/AgentPages/Agents";
import AgentLogin from "../pages/AgentPages/AgentLogin";
import MyProperties from "../pages/AgentDashboard/MyProperties";
import Inquiries from "../pages/AgentDashboard/Inquiries";
import Subscription from "../pages/AgentPages/Subscription";
import AgentProfile from "../pages/AgentDashboard/AgentProfile";
import AgentSubscription from "../pages/AgentDashboard/AgentSubscription";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SystemLayout />}>
        <Route index element={<Home />} />
        <Route path="listing" element={<House />} />
        <Route path="house-details/:id" element={<HouseDetails />} />
        <Route path="house-category/:category" element={<HouseCategories />} />
        <Route path="agent" element={<Agents />} />
        <Route path="agent-login" element={<AgentLogin />} />
        <Route path="agent-sub" element={<Subscription />} />
        <Route path="become-agent" element={<BecomeAgent />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="booking" element={<MyBookingPage />} />
        <Route path="booking/:type/:id" element={<Booking />} />
        <Route path="agent-details/:id" element={<AgentsProperties />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* agent dashboard */}
      <Route path="/agent" element={<AgentLayout />}>
        <Route path="dashboard" element={<AgentOverview />} />
        <Route path="add-property" element={<AgentAddProduct />} />
        <Route path="my-properties" element={<MyProperties />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="subscription" element={<AgentSubscription />} />
        <Route path="profile" element={<AgentProfile />} />
      </Route>
    </>,
  ),
);

export default router;
