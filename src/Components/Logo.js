import React from 'react'
import logo from '../Assets/Logo/hexagon_abstract_modern_logo_preview_rev_1 (1).png'
import style from '../Pages/LoginLayout/loginlayout.module.css'
function Logo() {
  return (
    <div className={style.logoContainer}>
        <img src={logo} alt='logo' className={style.logoImage}/>
        <p>Dash<span>board</span></p>
    </div>
  )
}

export default Logo