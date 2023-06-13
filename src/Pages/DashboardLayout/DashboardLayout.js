import React from 'react'
import style from './dashboardlayout.module.css';
import { Outlet } from 'react-router-dom';
function DashboardLayout() {
  return (
    <div className={style.dashboardLayout}>
        <div>navbar</div>
        <div>Search bar</div>
        <div className={style.outlet}>
        <Outlet/>

        </div>
    </div>
  )
}

export default DashboardLayout