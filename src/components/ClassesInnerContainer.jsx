import React, { useEffect } from 'react'
import ClassesInnerCard from './ClassesInnerCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses, getMyCourses } from '../action/MainAction'

const ClassesInnerContainer = () => {
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(getMyCourses())
    dispatch(getCourses())
  },[dispatch])


  const {myCourses,courses,loggedInUser}=useSelector(state=>state.Data)



  console.log(loggedInUser);
  console.log(myCourses);
  console.log(courses);


  


  return (
    <div className='classes_inner_container container'>

      {
        loggedInUser?.is_staff?
        courses?.map((data,i)=>{
          return <ClassesInnerCard key={i} data={data}/>
        }):
        myCourses?.map((data,i)=>{
          return <ClassesInnerCard key={i} data={data}/>
        })
      }
    </div>
  )
}

export default ClassesInnerContainer