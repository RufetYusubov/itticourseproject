import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFunc, overlayFunc } from '../../redux/MainReducer'

const ModalCourseUnitAboutContainer = () => {
    const dispatch = useDispatch()
    const {courseUnitObj}=useSelector(state=>state.Data)

    console.log(courseUnitObj);
    return (
        <div className='modal_container'>
            <div onClick={() => dispatch(overlayFunc())} className="overlay"></div>
            <div className="modal_card">
                <button onClick={() => dispatch(closeFunc())} className='close_btn'>Close</button>
                <p>{courseUnitObj?.about}</p>
                
            </div>

        </div>
    )
}

export default ModalCourseUnitAboutContainer