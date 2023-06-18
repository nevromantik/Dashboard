import React, { useEffect, useState } from "react";
import style from "./dashboardlayout.module.css";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../App";
import { useContext } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import CategoryBar from "../../Components/CategoryBar/CategoryBar";
function DashboardLayout() {
  const { users, setUsers, state, dispatch, ishover, setHover } = useContext(AppContext);
  const location = useLocation()
  return (
    <div className={style.dashboardLayout} >
     
      <div className={style.categoryBar}>
        {location.pathname === '/dashboard/tasks' ? <CategoryBar/> : null}
      </div>
      <div className={style.searchBar}>
        
        <SearchBar state={state}/>
        
        </div>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
