import React from "react";
import style from "./taskslist.module.css";
import { FaTasks } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Task from "./Task";
function TasksList() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Tasks</h2>
        <button>Create Task</button>
      </div>
      <div className={style.menuwrap}>
        <div className={style.menu}>
          <div>
            <p>All tasks</p>
          </div>
          <div>
            <p>Urgent</p>
          </div>
          <div>
            <p>Deleted</p>
          </div>
        </div>
      </div>

      <div className={style.tasksWrap}>
        <section>
          <div className={style.allTasks}>
            <div className={style.first}>
              <FaTasks style={{ color: "#8705D2", marginRight: "1rem" }} />
              <p>Tasks</p>
            </div>
            <div className={style.count}>1</div>
          </div>
        </section>
        <div className={style.task}>
        <Task/>

        </div>
        <section>
          <div className={style.completed}>
            <div className={style.first}>
              <BsFillCheckCircleFill
                style={{ color: "#8705D2", marginRight: "1rem" }}
              />
              <p>Completed</p>
            </div>
            <div className={style.count}>10</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TasksList;
