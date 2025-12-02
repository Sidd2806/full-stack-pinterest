import React from 'react'
import LeftBar from '../../components/LeftBar/LeftBar'
import TopBar from '../../components/TopBar/topBar'
import './MainLayout.css'
import { Outlet } from 'react-router'
const MainLayout = () => {
  return (
   <div className='app'>
    <LeftBar />
    <div className="content">
      <TopBar />
      <Outlet /> 
      {/* The Outlet component in React Router DOM acts as a placeholder within a parent route component, designed to render its matched child route components dynamically */}
    </div>
    </div>
  )
}

export default MainLayout
