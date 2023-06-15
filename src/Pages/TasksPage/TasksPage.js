import React from 'react'
import style from './taskspage.module.css';
import { FC, useState, useContext } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { AppContext } from '../../App';
import CategoryModal from '../../Components/CategoryModal/CategoryModal';
import arrowDown from '../../Assets/Modal/icons8-down-button-48.png'
function TasksPage() {
    const {state, dispatch, isModalOpen, setIsModalOpen} = useContext(AppContext); 
    
    const [tasks, setTasks] = useState(state[0]?.tasks);
  return (
    <div className={style.welcomeWrap}>
       

   <div style={{position: 'absolute'}}>

   <ReactSortable list={tasks} setList={setTasks}>
      {tasks.map((item) => (
        <div key={item.id} className={style.task}>{item.title}</div>
      ))}
    </ReactSortable>
   </div>
   

    </div>
  )
}

export default TasksPage