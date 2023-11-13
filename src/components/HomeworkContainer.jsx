import React from 'react'
import LogoLang from './LogoLang'
import TitleSearchInp from './TitleSearchInp'
import HomeworkInnerContainer from './HomeworkInnerContainer'

const HomeworkContainer = () => {
  return (
    <div className='dashboard_container homework_container'>
        <LogoLang/>
        <TitleSearchInp pageHeader="Home Work"/>
        <HomeworkInnerContainer/>
    </div>
  )
}

export default HomeworkContainer