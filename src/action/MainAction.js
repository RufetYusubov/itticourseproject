import axios from "axios"
import { baseUrl } from "../MainApi"
import { getCoursesFunc, getHomeworksFunc, getMyCoursesFunc, getMyHomeworksFunc, loggedInUserFunc } from "../redux/MainReducer";

export const getUserInfo=(email)=>async dispatch=>{
    await axios.get(`${baseUrl}account/${email}/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp.data);
        dispatch(loggedInUserFunc(resp.data))
    })
}



export const getMyCourses=()=>async dispatch=>{
    await axios.get(`${baseUrl}mycourses/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp.data);
        dispatch(getMyCoursesFunc(resp.data))
        
    })
}

export const getCourses=()=>async dispatch=>{
    await axios.get(`${baseUrl}courses/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        // console.log(resp.data);
        dispatch(getCoursesFunc(resp.data))
        
    })
}

export const getMyHomeworks=()=>async dispatch=>{
    await axios.get(`${baseUrl}myhomeworks/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
    //    console.log(resp.data);
    dispatch(getMyHomeworksFunc(resp.data))     
    })
}

export const getHomeworks=()=>async dispatch=>{
    await axios.get(`${baseUrl}homeworks/`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
    //    console.log(resp.data);
    dispatch(getHomeworksFunc(resp.data))     
    })
}



