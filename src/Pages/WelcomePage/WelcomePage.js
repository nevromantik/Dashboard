import React from 'react'
import style from './welcome.module.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import DashProjectCard from '../../Components/DashCards/DashProjectCard';
import DashTaskCard from '../../Components/DashCards/DashTaskCard';
import DashArticlesCard from '../../Components/DashCards/DashArticlesCard';
import DashWeather from '../../Components/DashCards/DashWeather';
function WelcomePage() {
  return (
    <div className={style.container}>
        <Searchbar/>
        <DashProjectCard/>
        <DashTaskCard/>
        <DashWeather/>
        <DashArticlesCard/>
    </div>
  )
}

export default WelcomePage