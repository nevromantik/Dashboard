import React from 'react'
import style from './logo.module.css';
import logo from '../../Assets/Logo/hexagon_abstract_modern_logo_preview_rev_1 (1).png'

function Logo() {
  return (
    <div className={style.container}>
        <img src={logo} alt='logo in the navbar'/>
        <p>Dash<span>board</span></p>
    </div>
  )
}

export default Logo