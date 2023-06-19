import React, { useEffect, useState } from "react";
import style from "./dashboardlayout.module.css";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
function DashboardLayout() {
  const { users, setUsers, state, dispatch } = useContext(AppContext);
  const location = useLocation()
  return (
    <div className={style.dashboardLayout} >
     <Navbar/>
      <Outlet/>
    </div>
  );
}

export default DashboardLayout;
