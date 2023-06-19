import React from "react";
import style from "./searchbar.module.css";
import container from "../../Pages/WelcomePage/welcome.module.css";
import {BsSearch} from 'react-icons/bs'
import { useContext } from "react";
import { AppContext } from "../../App";
function Searchbar() {
    const {state} = useContext(AppContext)
  return (
    <div className={`${container.searchbar} ${style.container}`}>
        <div><p>Welcome back {state[0].fullname}</p></div>
        <div className={style.inputContainer}>
            <div><BsSearch/></div>
            <input type='text' placeholder="Search Anything..."/>
        </div>
    </div>
  );
}

export default Searchbar;
