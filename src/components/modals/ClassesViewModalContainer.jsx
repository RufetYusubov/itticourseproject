import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFunc, modalCourseUnitAboutContainerFunc, modalCourseUnitUpdateFunc, overlayFunc } from '../../redux/MainReducer';

const ClassesViewModalContainer = () => {
  const { coursesObj } = useSelector(state => state.Data)
  console.log(coursesObj);
  const dispatch = useDispatch()


  
  return (
    <div className='modal_container'>
      <div onClick={()=>dispatch(overlayFunc())} className="overlay"></div>
      <div className="modal_card">
        <button onClick={() => dispatch(closeFunc())} className='close_btn'>Close</button>
        <h2>{coursesObj?.name}</h2>
        <p>Lessons</p>
        {
          coursesObj?.units?.map((course, i) => {
            return (
              <div className='course_unit_card' key={i}>

                <p>{course?.name}</p>
                <div>
                  <button onClick={()=>dispatch(modalCourseUnitAboutContainerFunc(course))}>View</button>
                  <button>Delete</button>
                  <button onClick={()=>dispatch(modalCourseUnitUpdateFunc(course))}>Update</button>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default ClassesViewModalContainer