import React from 'react'
import LogoImg from "../images/logo.png"

const LogoLang = () => {
  return (
    <div className='logo_lang'>
        <img src={LogoImg} alt="" />
        <select name="" id="">
            <option value="Az">Az</option>
        </select>
    </div>
  )
}

export default LogoLang