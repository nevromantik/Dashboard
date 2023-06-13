import React, { useState } from "react";
import style from "./navbar.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";
import { BiBrain } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import logo from "../../Assets/Logo/hexagon_abstract_modern_logo_preview_rev_1 (1).png";
function Navbar() {
  const [showNavContent, setShowNavContent] = useState(false);
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3); // Ottiene il nome del mese corrente
  const day = date.getDate();
  return (
    <>
      <div className={style.navbarContainer}>
        <div
          className={style.navbarFirstBlock}
          style={{ borderBottomRightRadius: showNavContent ? "30px" : null }}
        >
          <div className={style.bookTrackIconWrap}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div
          className={style.navbarSecondBlock}
          style={{
            backgroundColor: showNavContent ? "white" : "rgba(91,19,92,1)",
          }}
          onMouseEnter={() => setShowNavContent(!showNavContent)}
        >
          <div className={style.taskTrackIconWrap}>
            <BsListTask style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div
          className={style.navbarThirdBlock}
          style={{ borderTopRightRadius: showNavContent ? "30px" : null }}
        >
          <div className={style.weatherTrackIconWrap}>
            <TiWeatherSunny style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className={style.navbarFourthBlock}>
          <div className={style.aiTrackIconWrap}>
            <BiBrain style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className={style.navbarOtherBlock}>
          <div className={style.settingsTrackIconWrap}>
            <CiSettings style={{ fontSize: "1.5rem" }} />
          </div>
          <div className={style.dateWrap}>
            <h1>{month}</h1>
            <h2>{day}</h2>
          </div>
        </div>
      </div>

      {showNavContent ? (
        <div className={style.navbarTaskContent}>OOOOOO</div>
      ) : null}
    </>
  );
}

export default Navbar;
