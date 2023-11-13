import React from 'react'
import LogoLang from './LogoLang'
import TitleSearchInp from './TitleSearchInp'
import ClassesInnerContainer from './ClassesInnerContainer'
import { useSelector } from 'react-redux'
import ClassesViewModalContainer from './modals/ClassesViewModalContainer'
import ModalCourseUnitAboutContainer from './modals/ModalCourseUnitAboutContainer'
import ModalCouseUnitUpdate from './modals/ModalCouseUnitUpdate'

const ClassesContainer = () => {
    const {classesViewModalContainer,modalCourseUnitAboutContainer,modalCourseUnitUpdate}=useSelector(state=>state.Data)
    return (
        <div className='dashboard_container container'>
            <LogoLang />
            <TitleSearchInp pageHeader="Classes"/>
            <ClassesInnerContainer/>

            {classesViewModalContainer && <ClassesViewModalContainer/>}
            {modalCourseUnitAboutContainer && <ModalCourseUnitAboutContainer/>}
            {modalCourseUnitUpdate && <ModalCouseUnitUpdate/>}

        </div>
    )
}

export default ClassesContainer