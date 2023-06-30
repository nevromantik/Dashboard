import React, { useState } from "react";
import style from "./dashtask.module.css";
import { useContext , useEffect} from "react";
import { AppContext } from "../../App";
import NoArticlesCard from "../NoArticlesCard/NoArticlesCard";
import noArticle from '../../Assets/NoCard/icons8-book-64.png';
import noTasks from '../../Assets/NoCard/icons8-task-64.png';
import noProject from '../../Assets/NoCard/icons8-project-64.png';
function DashTaskCard() {
  const { state } = useContext(AppContext);
  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  const [noCard, setNoCard] = useState([
    {type: 'articles', img: noArticle},
    {type: 'tasks', img: noTasks},
    {type: 'projects', img: noProject}
   ])
  useEffect(() => {
  const uncompleted = state[0]?.tasks?.filter((task) => task?.completed === false).slice(0,4)
  setUncompletedTasks(uncompleted)
  }, [state])
  
  return (
    <div className={`${style.card}`}>
      <div className={style.cardInfo}>
        <div>
          <h3>Unfinished tasks list</h3>
          {uncompletedTasks?.length > 0 ? <p>Tick the tasks you have not completed</p> : <p>You have completed all your tasks!</p>}
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>
      {state[0]?.tasks?.length > 0 ? 
      uncompletedTasks?.map((task) => {
        return  <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>{task?.title}</h4>
            </div>
          </div>
        </div>
      </div>
      }) :null}
     

    </div>
  );
}

export default DashTaskCard;
