import React from 'react'
import style from './inbox.module.css';
import { Outlet } from 'react-router-dom';
import TasksList from '../../../Components/Tasks/TasksList';
function Inbox() {
  return (
    <div className={style.container}>
       <TasksList/> 
    </div>
  )
}

export default Inbox