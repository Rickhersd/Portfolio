import React, { useContext, useEffect } from 'react'
import { ConfigContext } from '..'

import DarkmodeBtnSvg from '../images/darkmode-btn.svg'
import '../sass/_darkmode-btn.scss'

export default function DarkmodeBtn() {

  const { toggleDarkmode, isDarkmodeOn } = useContext(ConfigContext)

  /*function toggleDarkMode(){
    this.darkModeOn = !this.darkModeOn; 
    this.currentTheme = (this.darkModeOn == true) ? 'dark' : 'light';
    this.darkModeElements.forEach(e => e.setAttribute("data-darkmode", this.darkModeOn));
    changeLocalValue(this.currentTheme);
  }*/

  return (
    <div onClick={() => toggleDarkmode()} style={{cursor:"pointer"}}>
      <DarkmodeBtnSvg data-darkmode={isDarkmodeOn}></DarkmodeBtnSvg>
    </div>
  )
}
