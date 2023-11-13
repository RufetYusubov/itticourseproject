import React from 'react'
import LogoLang from './LogoLang'
import TitleSearchInp from './TitleSearchInp'
import DashboardHomeworkCard from './DashboardHomeworkCard'

const DashboardContainer = () => {
  return (
    <div className='dashboard_container container'>
        <LogoLang/>
        <TitleSearchInp pageHeader="Dashboard"/>
        <DashboardHomeworkCard/>
    </div>
  )
}

export default DashboardContainer