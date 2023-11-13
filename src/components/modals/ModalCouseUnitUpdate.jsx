import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeFunc, courseUnitSelectValueFunc, courseUnitUpdateAboutFunc, courseUnitUpdateNameFunc, overlayFunc } from '../../redux/MainReducer';
import axios from 'axios';
import { baseUrl } from '../../MainApi';

const ModalCouseUnitUpdate = () => {
    const dispatch = useDispatch()
    const { courseUnitObj, courseUnitUpdateName, courseUnitUpdateAbout, myCourses, courseUnitSelectValue } = useSelector(state => state.Data)

    console.log(courseUnitObj);

    const courseUnitUpdateSaveBtn = () => {
        const data = {
            name: courseUnitUpdateName,
            about: courseUnitUpdateAbout,
            course: courseUnitSelectValue===''? myCourses[0].id: +courseUnitSelectValue
        }

        console.log(data);


        axios({
            method: "PUT",
            url: `${baseUrl}unit-update/${courseUnitObj.id}/`,
            data
        }).then(resp=>{
            console.log(resp);
        })
    }
    return (
        <div className='modal_container'>
            <div onClick={() => dispatch(overlayFunc())} className="overlay"></div>
            <div className="modal_card">
                <button onClick={() => dispatch(closeFunc())} className='close_btn'>Close</button>
                <input value={courseUnitUpdateName} onChange={(e) => dispatch(courseUnitUpdateNameFunc(e.target.value))} type="text" />
                <textarea value={courseUnitUpdateAbout} onChange={(e) => dispatch(courseUnitUpdateAboutFunc(e.target.value))} cols="30" rows="10"></textarea>
                <select value={courseUnitSelectValue} onChange={(e) => dispatch(courseUnitSelectValueFunc(e.target.value))}>
                    {
                        myCourses?.map((data, i) => {
                            return <option key={i} value={data?.id}>{data?.name}</option>
                        })
                    }

                </select>

                <button onClick={courseUnitUpdateSaveBtn}>Save</button>

            </div>

        </div>
    )
}

export default ModalCouseUnitUpdate