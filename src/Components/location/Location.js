import React from "react";
import style from "./location.module.css";
import { BsSearch } from "react-icons/bs";
function Location({ setLoc }) {
  
  return (
    <div className={style.container}>
      <div className={style.forecastWrap}>
      <h3>Change location</h3>

      <div className={style.inputContainer}>
            <div><BsSearch/></div>
            <input type='text' placeholder="Enter location..." onChange={(e) => setLoc(e.target.value)}/>
        </div>
      
      </div>
    </div>
  );
}

export default Location;
