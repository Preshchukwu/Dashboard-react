import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/navigation/side/SideNav'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className='layout'>
      <div className='sideNav'>
        <SideNav/>
      </div>


      <div className='display'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
