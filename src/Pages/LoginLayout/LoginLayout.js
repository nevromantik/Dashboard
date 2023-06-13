import React from 'react'
import { Outlet } from 'react-router-dom';
import style from './loginlayout.module.css';
import LoginGallery from '../../Components/LoginSignUp/LoginGallery';
function LoginLayout() {
  return (
    <div className={style.loginLayout}>
     <Outlet/>
     <LoginGallery/>
    </div>

  )
}

export default LoginLayout