import React from "react";
import style from "./task.module.css";
function Task() {
  return (
    <div className={style.container}>
      <div className={style.task}>
        <div className={style.check}></div>
        <div className={style.info}>
          <div>
            <h5>Task title lorem ipsum example</h5>
          </div>
          <div className={style.date}>
            <p>6 feb 2022</p>
          </div>
          <div className={style.tag}>
            <div>Tag</div>
            <div>Tag</div>
          </div>
        </div>

      </div>
      <div className={style.priority}>Urgent</div>

    </div>
  );
}

export default Task;
