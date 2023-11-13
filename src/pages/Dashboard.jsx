import React from 'react'
import SideBar from '../components/SideBar'
import DashboardContainer from '../components/DashboardContainer'

const Dashboard = () => {
  return (
    <div className='main_container'>
      <SideBar/>
      <DashboardContainer/>
    </div>
  )
}

export default Dashboard