import React from 'react'
import { useDispatch } from 'react-redux'
import { classesViewModalContainerFunc } from '../redux/MainReducer'

const ClassesInnerCard = ({data}) => {
  const dispatch=useDispatch()
  return (
    <div className='classes_inner_card'>
       <p>{data.name}</p> 
       <button onClick={()=>dispatch(classesViewModalContainerFunc(data))}>View</button>
    </div>
  )
}

export default ClassesInnerCard