import React from "react";
import style from "./dasharticle.module.css";
import articleimg from '../../Assets/Cards/primo-piano-sulle-foglie-verdi-in-natura.jpg'
function DashArticlesCard() {
  return (
    <div className={` ${style.card}`}>
      <div className={style.cardInfo}>
        <div>
          <h3>Articles in folders</h3>
          <p>The progress of the article you are working on</p>
        </div>
        <div>
          <button>View All</button>
        </div>
      </div>

      <div className={style.articles}>
        <div className={style.article}>
            <img src={articleimg} alt='article'/>
            <h4>Nature article</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. </p>
        </div>
        <div className={style.article}>
            <img src={articleimg} alt='article'/>
            <h4>Nature article</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. </p>
        </div>
        <div className={style.article}>
            <img src={articleimg} alt='article'/>
            <h4>Nature article</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. </p>
        </div>
        <div className={style.article}>
            <img src={articleimg} alt='article'/>
            <h4>Nature article</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. </p>
        </div>
      </div>
    </div>
  );
}

export default DashArticlesCard;
