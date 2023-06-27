import React from 'react'
import style from './article.module.css';
import {RiDeleteBinFill} from 'react-icons/ri'
function Article() {
  return (
    <div
    className={style.container}
   
  >
    <div className={style.task}>
      
      <div className={style.info}>
        <div>
          <h5 >
            Article Title
          </h5>
        </div>
        <div className={style.date}>
          <p>Created : </p>
        </div>
        <div className={style.tag}>
          <div>
            <p>Category..</p>
          </div>
        </div>
      </div>
    </div>
    <div
      className={style.priority}
      style={{ marginLeft: "1rem" }}
    >
      <RiDeleteBinFill />
    </div>
  </div>  )
}

export default Article