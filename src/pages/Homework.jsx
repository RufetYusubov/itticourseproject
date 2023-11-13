import React from 'react'
import HomeworkContainer from '../components/HomeworkContainer'
import SideBar from '../components/SideBar'

const Homework = () => {
  return (
    <div className='main_container'>
        <SideBar/>
        <HomeworkContainer/>
    </div>
  )
}

export default Homework