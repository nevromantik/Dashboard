import React, { useEffect, useState } from "react";
import style from "./taskslist.module.css";
import { FaTasks } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Task from "./Task";
import { useContext } from "react";
import { AppContext } from "../../App";
import DeletedTasks from "./DeletedTasks";
import UrgentTask from "./UrgentTask";
function TasksList() {
  const { displayForm, setDisplayForm, state, deletedTasks } =
    useContext(AppContext);
  const [selectedSection, setSelectedSection] = useState("All Tasks");
  const [showCompleted, setShowCompleted] = useState(false);
  const [urgentTasks, setUrgentTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    const filtered = state[0]?.tasks?.filter((task) => task?.urgent === true);
    setUrgentTasks((prev) => {
      return [...filtered];
    });
    const completed = state[0]?.tasks?.filter(
      (task) => task?.completed === true
    );
    setCompletedTasks((prev) => {
      return [...completed];
    });
  }, [state]);
  console.log("completed", completedTasks);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Tasks</h2>
        <button onClick={() => setDisplayForm("create task")}>
          Create Task
        </button>
      </div>
      <div className={style.menuwrap}>
        <div className={style.menu}>
          <div onClick={() => setSelectedSection("All Tasks")}>
            <p>All tasks</p>
          </div>
          <div onClick={() => setSelectedSection("Urgent Tasks")}>
            <p>Urgent</p>
          </div>
          <div onClick={() => setSelectedSection("Deleted Tasks")}>
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
          {selectedSection === "All Tasks"
            ? state[0]?.tasks?.map((task) => {
                return (
                  <Task
                    id={task?.id}
                    title={task?.title}
                    dueDate={task?.dueDate}
                    completed={task?.completed}
                    category={task?.category}
                    urgent={task?.urgent}
                  />
                );
              })
            : null}
          {selectedSection === "Deleted Tasks"
            ? deletedTasks?.map((task) => {
                return (
                  <DeletedTasks
                    id={task?.id}
                    title={task?.title}
                    dueDate={task?.dueDate}
                    completed={task?.completed}
                    category={task?.category}
                    urgent={task?.urgent}
                  />
                );
              })
            : null}
          {selectedSection === "Urgent Tasks"
            ? urgentTasks?.map((task) => {
                return (
                  <UrgentTask
                    id={task?.id}
                    title={task?.title}
                    dueDate={task?.dueDate}
                    completed={task?.completed}
                    category={task?.category}
                    urgent={task?.urgent}
                  />
                );
              })
            : null}
        </div>
        <section onClick={() => setShowCompleted(!showCompleted)}>
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
        <div className={style.task}>
          {showCompleted
            ? completedTasks?.map((task) => {
                return (
                  <Task
                    id={task?.id}
                    title={task?.title}
                    dueDate={task?.dueDate}
                    completed={task?.completed}
                    category={task?.category}
                    urgent={task?.urgent}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default TasksList;
