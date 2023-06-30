import React from "react";
import style from "./dashproject.module.css";
import container from "../../Pages/WelcomePage/welcome.module.css";
import codeImg from "../../Assets/Cards/icons8-coding-16.png";
import NoArticlesCard from "../NoArticlesCard/NoArticlesCard";
import noArticle from '../../Assets/NoCard/icons8-book-64.png';
import noTasks from '../../Assets/NoCard/icons8-task-64.png';
import noProject from '../../Assets/NoCard/icons8-project-64.png';
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
function DashProjectCard() {
  const { state } = useContext(AppContext);

  const [noCard, setNoCard] = useState([
    {type: 'articles', img: noArticle},
    {type: 'tasks', img: noTasks},
    {type: 'projects', img: noProject}
   ])
  return (
    <div className={`${container.projectcard} ${style.card}`}>
      <div className={style.cardInfo}>
        <div>
          <h3>Unfinished project list</h3>
          <p>Tick the project you have completed</p>
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>

      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
          <div>
            <p>Mar</p>
            <p>09</p>
          </div>
          <div>
            <img src={codeImg} alt="code" />
          </div>
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Project name</h4>
              <p>Project description</p>
            </div>
          </div>

          <div className={style.priority}>
            <div></div>
            <p>Urgent</p>
          </div>
        </div>
      </div>


      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
          <div>
            <p>Mar</p>
            <p>09</p>
          </div>
          <div>
            <img src={codeImg} alt="code" />
          </div>
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Project name</h4>
              <p>Project description</p>
            </div>
          </div>

          <div className={style.priority}>
            <div></div>
            <p>Urgent</p>
          </div>
        </div>
      </div>

      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
          <div>
            <p>Mar</p>
            <p>09</p>
          </div>
          <div>
            <img src={codeImg} alt="code" />
          </div>
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Project name</h4>
              <p>Project description</p>
            </div>
          </div>

          <div className={style.priority}>
            <div></div>
            <p>Urgent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashProjectCard;
