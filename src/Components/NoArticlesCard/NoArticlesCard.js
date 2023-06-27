import React from "react";
import style from "./noarticlescard.module.css";
import articlesGIF from "../../Assets/Articles/icons8-book.gif";
function NoArticlesCard({ setEditorMode }) {
  return (
    <main className={style.addNewButton}>
        <h3>There are no articles here</h3>
       <img src={articlesGIF} alt="articles" />
        <button onClick={() => setEditorMode(true)} className={style.addBtn}>Add a new article</button>
    </main>
  );
}

export default NoArticlesCard;
