import React, { useEffect } from 'react'
import { AiFillEdit, AiOutlineHome, AiOutlineSolution, AiOutlineUser} from "react-icons/ai"
import { FaCalendarDays} from "react-icons/fa6"
import {SiGoogleclassroom, SiTeamspeak} from "react-icons/si"
import {MdHomeWork, MdOutlineRateReview} from "react-icons/md"
import {FcStatistics} from "react-icons/fc"
import {GrCertificate} from "react-icons/gr"
import {PiSuitcaseSimpleBold} from "react-icons/pi"
import {FiHeadphones} from "react-icons/fi"
import {BsSoundwave} from "react-icons/bs"
import{VscOpenPreview} from "react-icons/vsc"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserInfo } from '../action/MainAction'

const SideBar = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserInfo(localStorage.getItem('loggedEmail')))
    },[dispatch])

    const {loggedInUser}=useSelector(state=>state.Data)

    console.log(loggedInUser);
    return (
        <div className='sidebar_container'>
            <div className="sidebar_header">
                <h2>{loggedInUser?.first_name} {loggedInUser?.last_name}</h2>
                <span>{loggedInUser?.is_staff? 'admin':loggedInUser?.category==='T'? 'teacher': loggedInUser?.category==='S'? 'student': null}</span>
                <AiOutlineUser className='user_icon' />
            </div>
            <div className="sidebar_main">
                <nav>
                    <ul className="nav_list">
                        <li><Link to="/dashboard"><AiOutlineHome /> Dashboard</Link></li>
                        <li><Link to="/dashboard"><FaCalendarDays/> Check-In </Link></li>
                        <li><Link to="/dashboard"><AiFillEdit/> Exams</Link></li>
                        <li><Link to="/dashboard"><AiOutlineSolution /> Exam Results</Link></li>
                        <li><Link to="/classes"><SiGoogleclassroom /> Classes</Link></li>
                        <li><Link to="/homework"><MdHomeWork /> Home Work</Link></li>
                        <li><Link to="/dashboard"><FcStatistics /> Results</Link></li>
                        <li><Link to="/dashboard"><GrCertificate /> Certificate</Link></li>
                        <li><Link to="/dashboard"><PiSuitcaseSimpleBold /> Resources</Link></li>
                        <li><Link to="/dashboard"><SiTeamspeak /> Speakings</Link></li>
                        <li><Link to="/dashboard"><FiHeadphones /> Speaking Reviews</Link></li>
                        <li><Link to="/dashboard"><BsSoundwave/> Listings</Link></li>
                        <li><Link to="/dashboard"><MdOutlineRateReview /> Essays</Link></li>
                        <li><Link to="/dashboard"><VscOpenPreview /> Essay Reviews</Link></li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
        </div>
    )
}

export default SideBar