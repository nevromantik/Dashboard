import React from 'react'
import style from './logingallery.module.css';
import imageGallery from '../../Assets/Gallery/firstimagegallery-removebg-preview.png';
import Gallery from './Gallery';
function LoginGallery() {
  return (
    <div className={style.logingalleryContainer}>
      <img src={imageGallery} alt='preview of app'></img>
      <Gallery/>
    </div>
  )
}

export default LoginGallery