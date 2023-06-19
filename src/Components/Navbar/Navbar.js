import React from "react";
import style from "./navbar.module.css";
import Logo from "../Logo/Logo";
import dashIcon from "../../Assets/Navbar/icons8-circled-menu-50.png";
import projectIcon from "../../Assets/Navbar/icons8-folder-30.png";
import inboxIcon from "../../Assets/Navbar/icons8-inbox-64.png";
import todayIcon from "../../Assets/Navbar/icons8-today-50.png";
import articleIcon from "../../Assets/Navbar/icons8-article-64.png";
import settingsIcon from '../../Assets/Navbar/icons8-settings-50.png';
import logoutIcon from '../../Assets/Navbar/icons8-logout-rounded-up-64.png'
import { RiArrowDropUpFill } from "react-icons/ri";
function Navbar() {
  return (
    <div className={style.container}>
      <div>
        <Logo />
      </div>
      <div className={style.dashboardRoute}>
        <div>
          <img src={dashIcon} alt="dashboard icon" />
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
      <div className={style.inboxRoute}>
        <div>
          <img src={inboxIcon} alt="Inbox icon" className={style.inbox} />
        </div>
        <div>
          <p>Ibox</p>
        </div>
      </div>
      <div className={style.todayRoute}>
        <div>
          <img src={todayIcon} alt="Today icon" className={style.today} />
        </div>
        <div>
          <p>Today</p>
        </div>
      </div>
      <div className={style.projectRoute}>
        <div>
          <img src={projectIcon} alt="Project icon" className={style.project} />
        </div>
        <div className={style.submenu}>
          <p>Your projects</p>
          <RiArrowDropUpFill
            style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
          />
          {/**  RiArrowDownSFill */}
        </div>
      </div>
      <div className={style.submenuWrap}>
        <div>
          <p>Example Project</p>
        </div>
      </div>
      <div className={style.projectRoute}>
        <div>
          <img
            src={articleIcon}
            alt="Articles icon"
            className={style.project}
          />
        </div>
        <div className={style.submenu}>
          <p>Your articles</p>
          <RiArrowDropUpFill
            style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
          />
          {/**  RiArrowDownSFill */}
        </div>
      </div>
      <div className={style.submenuWrap}>
        <div>
          <p>Example rticle</p>
        </div>
      </div>

      <div className={style.settingsWrap}>
        <div className={style.settings}>
            <div><img src={settingsIcon} alt='settings ico'/></div>
            <div><p>Settings</p></div>
        </div>
        <div className={style.logout}>
            <div><img src={logoutIcon} alt='logout ico'/></div>
            <div><p>Log Out</p></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
