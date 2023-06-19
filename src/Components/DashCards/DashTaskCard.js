import React from 'react'
import style from './dashtask.module.css'
function DashTaskCard() {
  return (
    <div className={`${style.card}`}>
      <div className={style.cardInfo}>
        <div>
          <h3>Unfinished tasks list</h3>
          <p>Tick the tasks you have completed</p>
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>

      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
         
         
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Task title</h4>
              
            </div>
          </div>

          
        </div>
      </div>


      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
         
         
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Task title</h4>
              
            </div>
          </div>

          
        </div>
      </div>

      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
         
         
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Task title</h4>
              
            </div>
          </div>

          
        </div>
      </div>

      <div className={style.cardrow}>
        <div className={style.checkwrap}>
          <div className={style.check}></div>
         
         
        </div>

        <div className={style.projectInfo}>
          <div className={style.namedescription}>
            <div>
              <h4>Task title</h4>
              
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default DashTaskCard