import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footers from './Components/Footer/Footers'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  )
}

export default Layout