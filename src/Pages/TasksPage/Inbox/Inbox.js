import React from 'react'
import style from './inbox.module.css';
import { Outlet } from 'react-router-dom';
import TasksList from '../../../Components/Tasks/TasksList';
import CreateTaskForm from '../../../Components/Forms/CreateTaskForm';
import UpdateTaskForm from '../../../Components/Forms/UpdateTaskForm';
import { useContext } from 'react';
import { AppContext } from '../../../App';
function Inbox() {
  const { displayForm, setDisplayForm} = useContext(AppContext)
  return (
    <div className={style.container}>
       <TasksList/> 
       {displayForm === 'create task' ?  <CreateTaskForm/> : <UpdateTaskForm/>
 }
    </div>
  )
}

export default Inbox