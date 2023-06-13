import React from "react";
import style from "./dashboardlayout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
function DashboardLayout() {
  return (
    <div className={style.dashboardLayout}>
      <Navbar/>
      <div className={style.searchBar}>Search bar</div>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
