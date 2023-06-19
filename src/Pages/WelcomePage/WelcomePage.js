import React from 'react'
import style from './welcome.module.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import DashProjectCard from '../../Components/DashCards/DashProjectCard';
function WelcomePage() {
  return (
    <div className={style.container}>
        <Searchbar/>
        <DashProjectCard/>
    </div>
  )
}

export default WelcomePage