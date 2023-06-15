import React, { useState } from "react";
import style from "./navbar.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { BsBack, BsListTask } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";
import { BiBrain } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import logo from "../../Assets/Logo/hexagon_abstract_modern_logo_preview_rev_1 (1).png";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
function Navbar() {
  const navigate = useNavigate()
  const [showNavContent, setShowNavContent] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const [highPriorityTask, setHighPriorityTask] = useState([]);
  const [mediumPriorityTask, setMediumPriorityTask] = useState([]);
  const [lowPriorityTask, setLowPriorityTask] = useState([]);
  const [isImportantClicked, setIsImportantClicked] = useState(false);
  const [isMediumClicked, setIsMediumClicked] = useState(false);
  const [isLowClicked, setIsLowClicked] = useState(false);
  const [completedHighTaskNum, setCompletedHighTaskNum] = useState([]);
  const [completedMediumTaskNum, setCompletedMediumTaskNum] = useState([]);
  const [completedLowTaskNum, setCompletedLowTaskNum] = useState([]);

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3); // Ottiene il nome del mese corrente
  const day = date.getDate();


  
 /* useEffect(() => {
    const highPriority = state[0]?.tasks?.filter(
      (task) => task.priority === "high"
    );
    setHighPriorityTask(highPriority);
    const mediumPriority = state[0]?.tasks?.filter(
      (task) => task.priority === "medium"
    );

    setMediumPriorityTask(mediumPriority);
    const lowPriority = state[0]?.tasks?.filter(
      (task) => task.priority === "low"
    );
    setLowPriorityTask(lowPriority);

    const completedHigh = state[0]?.tasks?.filter(
      (task) => task.completed === false && task.priority === "high"
    );
    setCompletedHighTaskNum(completedHigh);
    const completedMedium= state[0]?.tasks?.filter(
      (task) => task.completed === false && task.priority === "medium"
    );
    setCompletedMediumTaskNum(completedMedium);
    const completedLow = state[0]?.tasks?.filter(
      (task) => task.completed === false && task.priority === "low"
    );
    setCompletedLowTaskNum(completedLow);
  }, [state]);

  const handleCompleteTask = (event) => {
    const dataAttribute = event.target.dataset.id;
    dispatch({ type: "COMPLETE_TASK", payload: dataAttribute });
  };
  console.log(highPriorityTask); */
  return (
    <>
      <div className={style.navbarContainer}>
        <div
          className={style.navbarFirstBlock}
        >
          <div className={style.bookTrackIconWrap}>
            <img src={logo} alt="logo" onClick={() => {
              navigate('./')
            }}  />
          </div>
        </div>
        <div
          className={style.navbarSecondBlock}
          style={{
          }}
          onMouseEnter={() => setShowNavContent(!showNavContent)}


        >
          <div className={style.taskTrackIconWrap}>
            <BsListTask style={{ fontSize: "1.5rem" }} onClick={() => {
              navigate('tasks')
            }} />
          </div>
        </div>
        <div
          className={style.navbarThirdBlock}
          data-name='weather'


        >
          <div className={style.weatherTrackIconWrap}>
            <TiWeatherSunny style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className={style.navbarFourthBlock}
                  data-name='ai'

                  >
          <div className={style.aiTrackIconWrap}>
            <BiBrain style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
        <div className={style.navbarOtherBlock}>
          <div className={style.settingsTrackIconWrap}
                    data-name='settings'

                    >
            <CiSettings style={{ fontSize: "1.5rem" }} />
          </div>
          <div className={style.dateWrap}>
            <h1>{month}</h1>
            <h2>{day}</h2>
          </div>
        </div>
      </div>
      {/** {showNavContent ? (
        <div className={style.navbarTaskContent}>
          <div className={style.listContainer}>
            <div
              className={style.importantPContainer}
              onClick={() => setIsImportantClicked(!isImportantClicked)}
            >
              <div className={style.completedNum}>{completedHighTaskNum?.length}</div>
              <p>Important task to complete</p>
            </div>

            {highPriorityTask?.length > 0 && isImportantClicked
              ? highPriorityTask?.map((task) => {
                  return (
                    <div key={task.id} className={style.singleTaskContainer}>
                      <div
                        className={style.checkbox}
                        data-id={task.id}
                        onClick={handleCompleteTask}
                      >
                        {task.completed === true ? (
                          <BsCheck color="black" />
                        ) : null}
                      </div>
                      <p>{task.title}</p>
                    </div>
                  );
                })
              : null}

            <div
              className={style.importantPContainer}
              onClick={() => setIsMediumClicked(!isMediumClicked)}
            >
              <div className={style.completedNumMedium}>{completedMediumTaskNum?.length}</div>

              <p>Medium task to complete</p>
            </div>

            {mediumPriorityTask?.length > 0 && isMediumClicked
              ? mediumPriorityTask?.map((task) => {
                  return (
                    <div key={task.id} className={style.singleTaskContainer}>
                      <div
                        className={style.checkbox}
                        data-id={task.id}
                        onClick={handleCompleteTask}
                      >
                        {task.completed === true ? (
                          <BsCheck color="black" />
                        ) : null}
                      </div>
                      <p>{task.title}</p>
                    </div>
                  );
                })
              : null}

            <div
              className={style.importantPContainer}
              onClick={() => setIsLowClicked(!isLowClicked)}
            >
              <div className={style.completedNumLow}>{completedLowTaskNum?.length}</div>

              <p>Low task to complete</p>
            </div>

            {lowPriorityTask?.length > 0 && isLowClicked
              ? lowPriorityTask?.map((task) => {
                  return (
                    <div key={task.id} className={style.singleTaskContainer}>
                      <div
                        className={style.checkbox}
                        data-id={task.id}
                        onClick={handleCompleteTask}
                      >
                        {task.completed === true ? (
                          <BsCheck color="black" />
                        ) : null}
                      </div>
                      <p>{task.title}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}*/}
      
    </>
  );
}

export default Navbar;
