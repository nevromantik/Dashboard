import React, { useContext } from "react";
import style from "./navbar.module.css";
import Logo from "../Logo/Logo";
import dashIcon from "../../Assets/Navbar/icons8-circled-menu-50.png";
import projectIcon from "../../Assets/Navbar/icons8-folder-30.png";
import inboxIcon from "../../Assets/Navbar/icons8-inbox-64.png";
import todayIcon from "../../Assets/Navbar/icons8-today-50.png";
import articleIcon from "../../Assets/Navbar/icons8-article-64.png";
import settingsIcon from "../../Assets/Navbar/icons8-settings-50.png";
import logoutIcon from "../../Assets/Navbar/icons8-logout-rounded-up-64.png";
import { RiArrowDropUpFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
function Navbar() {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  return (
    <div className={style.container}>
      <div>
        <Logo />
      </div>
      <div className={style.dashboardRoute} onClick={() => navigate("./")}>
        <div>
          <img src={dashIcon} alt="dashboard icon" />
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
      <div className={style.inboxRoute} onClick={() => navigate("tasks")}>
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
      <div className={style.projectRoute} onClick={() => navigate("projects")}>
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
      <div className={style.projectRoute} onClick={() => navigate("articles")}>
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
        {state[0]?.articles?.map((article) => {
          return (
            <div key={article?.id}>
              <p>{article?.title}</p>
            </div>
          );
        })}
      </div>

      <div className={style.settingsWrap}>
        <div className={style.settings}>
          <div>
            <img src={settingsIcon} alt="settings ico" />
          </div>
          <div>
            <p>Settings</p>
          </div>
        </div>
        <div className={style.logout}>
          <div>
            <img src={logoutIcon} alt="logout ico" />
          </div>
          <div>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
