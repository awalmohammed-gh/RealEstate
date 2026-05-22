import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import LoginForm from "../pages/LoginForm"



const SystemLayout = () => {

  const [openLoginForm, setOpenLoginForm] = useState(false)
  return (
    <div>
    <Navbar onOpen={() => setOpenLoginForm(true)}/>
      <Outlet/>
      <Footer/>
      {openLoginForm && <LoginForm onClose={() => setOpenLoginForm(false)}/>}
    </div>
  )
}

export default SystemLayout
