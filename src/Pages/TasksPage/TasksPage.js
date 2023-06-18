import React from "react";
import style from "./taskspage.module.css";
import { FC, useState, useContext } from "react";
import { ReactSortable } from "react-sortablejs";
import { AppContext } from "../../App";
import { useEffect } from "react";
import arrowDown from "../../Assets/Modal/icons8-down-button-48.png";
function TasksPage() {
  const {
    state,
    dispatch,
    isModalOpen,
    setIsModalOpen,
    setCurrentCatTitle,
    currentCatTitle,
  } = useContext(AppContext);

  const [tasks, setTasks] = useState(state[0]?.tasks);
  const [filteredTask, setFilteredTask] = useState([]);
  useEffect(() => {
    setTasks(state[0]?.tasks);
    const filtered = tasks?.filter((task) => {
      return task.category === currentCatTitle;
    });
    setFilteredTask(filtered);
  }, [state, currentCatTitle, tasks]);
  return (
    <div className={style.welcomeWrap}>
      <div style={{ position: "absolute" }}>
        <ReactSortable list={filteredTask} setList={setFilteredTask}>
          {filteredTask?.length > 0
            ? filteredTask?.map((item) => (
                <div key={item?.id} className={style.task}>
                  {item?.title} {item?.category}{" "}
                </div>
              ))
            : null}
        </ReactSortable>
      </div>
    </div>
  );
}

export default TasksPage;
