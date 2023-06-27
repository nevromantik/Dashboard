import React, { useEffect, useState } from "react";
import style from "./task.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { RiDeleteBinFill } from "react-icons/ri";
import DeletedTasks from "./DeletedTasks";
import { useRef } from "react";
import bip from "../../Assets/bip.mp3";
function Task({ id, title, category, completed, dueDate, urgent, task }) {
  const {
    displayForm,
    setDisplayForm,
    dispatch,
    state,
    deletedTasks,
    setDeletedTasks,
    selectedTask,
    setSelectedTask,
    setTaskId,
  } = useContext(AppContext);
  const handleDeleteTask = (taskId) => {
    const deleted = state[0]?.tasks?.filter((task) => task?.id === taskId);
    setDeletedTasks((prev) => {
      return [...prev, ...deleted];
    });
    dispatch({ type: "DELETE_TASK", selectedTaskId: taskId });
  };

  const handleCompleteTask = (taskId) => {
    dispatch({ type: "COMPLETE_TASK", taskId: taskId });
  };
  const audioRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      audioRef.current.play();
    }
  }, [isClicked]);

  return (
    <>
      <audio ref={audioRef}>
        <source src={bip} type="audio/mpeg" />
      </audio>

      <div
        className={style.container}
        onClick={() => {
          const selected = state[0]?.tasks?.find((el) => el?.id === id);
          setSelectedTask(selected);

          setDisplayForm("update task");
        }}
        key={id}
      >
        <div className={style.task}>
          <div
            className={style.check}
            onClick={() => {
              handleCompleteTask(id);
              setIsClicked(true);
            }}
          ></div>
          <div className={style.info}>
            <div>
              <h5 style={{ textDecoration: isClicked ? "line-through" : "" }}>
                {title}
              </h5>
            </div>
            <div className={style.date}>
              <p>{dueDate}</p>
            </div>
            <div className={style.tag}>
              <div>
                <p>{category}</p>
              </div>
            </div>
          </div>
        </div>
        {urgent ? <div className={style.priority}>Urgent</div> : null}
        <div
          className={style.priority}
          style={{ marginLeft: "1rem" }}
          onClick={() => handleDeleteTask(id)}
        >
          <RiDeleteBinFill />
        </div>
      </div>
    </>
  );
}

export default Task;
