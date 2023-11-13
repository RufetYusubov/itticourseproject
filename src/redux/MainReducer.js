import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
    name : "MAIN_SLICE",
    initialState: initialState,
    reducers : {
        loginEmailFunc: (state,action)=>{
            state.loginEmail=action.payload
        },
        loginPswFunc: (state,action)=>{
            state.loginPsw=action.payload
        },
        loggedInUserFunc: (state,action)=>{
            state.loggedInUser=action.payload
        },
        getMyCoursesFunc: (state,action)=>{
            state.myCourses=action.payload
        },
        getCoursesFunc: (state,action)=>{
            state.courses = action.payload
        },
        getMyHomeworksFunc:(state,action)=>{
            state.myHomeworks = action.payload
        },
        getHomeworksFunc:(state,action)=>{
            state.homeworks = action.payload
        },
        classesViewModalContainerFunc: (state,action)=>{
            state.classesViewModalContainer=true
            state.coursesObj=action.payload
        },
        closeFunc: (state,action)=>{
            state.classesViewModalContainer=false
            state.modalCourseUnitAboutContainer=false
            state.modalCourseUnitUpdate=false
        },
        overlayFunc: (state,action)=>{
            state.classesViewModalContainer=false
            state.modalCourseUnitAboutContainer=false
            state.modalCourseUnitUpdate=false
        },
        modalCourseUnitAboutContainerFunc: (state,action)=>{
            state.modalCourseUnitAboutContainer=true
            state.classesViewModalContainer=false
            state.courseUnitObj=action.payload
        },
        modalCourseUnitUpdateFunc:(state,action)=>{
            state.modalCourseUnitUpdate=true
            state.classesViewModalContainer=false
            state.courseUnitObj=action.payload
            state.courseUnitUpdateName=action.payload.name
            state.courseUnitUpdateAbout=action.payload.about
        },
        courseUnitUpdateNameFunc: (state,action)=>{
            state.courseUnitUpdateName=action.payload
        },
        courseUnitUpdateAboutFunc: (state,action)=>{
            state.courseUnitUpdateAbout=action.payload
        },

        courseUnitSelectValueFunc:(state,action)=>{
            state.courseUnitSelectValue=action.payload
        },



    }
})

export const Data= MainSlice.reducer;
export const {loginEmailFunc,loginPswFunc,loggedInUserFunc,getMyCoursesFunc,
    getCoursesFunc,classesViewModalContainerFunc,closeFunc,overlayFunc,modalCourseUnitAboutContainerFunc,
    modalCourseUnitUpdateFunc,courseUnitUpdateNameFunc,courseUnitUpdateAboutFunc,courseUnitSelectValueFunc,
    getMyHomeworksFunc,getHomeworksFunc}=MainSlice.actions