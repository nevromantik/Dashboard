import React from 'react'
import style from './task.module.css'
function UrgentTask({id, title, category, completed, dueDate, urgent, task}) {
  return (
    <div className={style.container}  key={id}>
    <div className={style.task}>
      <div className={style.check}></div>
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
  </div>
  )
}

export default UrgentTask