import React, { useState } from "react";
import style from "./task.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import {RiDeleteBinFill} from 'react-icons/ri'
import DeletedTasks from "./DeletedTasks";
function Task({id, title, category, completed, dueDate, urgent, task}) {
  const { displayForm, setDisplayForm, dispatch, state, deletedTasks, setDeletedTasks} = useContext(AppContext);
  const handleDeleteTask = (taskId) => {
    const deleted = state[0]?.tasks?.filter((task) => task?.id === taskId); 
    setDeletedTasks((prev) => {
      return [...prev, ...deleted]
    });
    dispatch({type: 'DELETE_TASK', selectedTaskId: taskId}); 
    
  }
 
    const handleCompleteTask = (taskId) => {
      
      dispatch({type: 'COMPLETE_TASK', taskId: taskId}); 

    }
  return (
    <div className={style.container} onClick={() => setDisplayForm('update task')} key={id}>
      <div className={style.task}>
        <div className={style.check} onClick={() => handleCompleteTask(id)}></div>
        <div className={style.info}>
          <div>
            <h5>{title}</h5>
          </div>
          <div className={style.date}>
            <p>{dueDate}</p>
          </div>
          <div className={style.tag}>
            <div><p>{category}</p></div>
          </div>
        </div>

      </div>
      {urgent  ?       <div className={style.priority}>Urgent</div>
  : null }
     <div className={style.priority} style={{marginLeft:'1rem'}} onClick={() => handleDeleteTask(id)}><RiDeleteBinFill/></div>
    </div>
  );
}

export default Task;
