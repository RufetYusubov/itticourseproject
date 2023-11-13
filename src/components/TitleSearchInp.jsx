import React from 'react'
import {BsSearch} from "react-icons/bs"

const TitleSearchInp = ({pageHeader}) => {
  return (
    <div className='title_search container'>
        <h2>{pageHeader}</h2>
        <div className="inp_icon">
            <input type="text" />
            <BsSearch className='search_icon'/>
        </div>
    </div>
  )
}

export default TitleSearchInp