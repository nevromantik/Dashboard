import React from "react";
import style from "./dashboardlayout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { AppContext } from "../../App";
import { useContext } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
function DashboardLayout() {
  const { users, setUsers, state, dispatch } = useContext(AppContext); 
  console.log(state)
  return (
    <div className={style.dashboardLayout}>
      <Navbar/>
      <div className={style.searchBar}><SearchBar state={state}/></div>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
