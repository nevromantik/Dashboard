import React from "react";
import style from "./noarticlescard.module.css";
import articlesGIF from "../../Assets/Articles/icons8-book.gif";
import { useNavigate } from "react-router-dom";
import articlePNG from '../../Assets/NoCard/icons8-book-64.png';
import { useEffect } from "react";
function NoArticlesCard({ setEditorMode, noCard }) {
  
  const navigate = useNavigate();
  
  
  return (
    <main className={style.addNewButton}>
        <h3>There are no {noCard?.type} here</h3>
       <img src={noCard?.img} alt="articles" />
        <button onClick={() => setEditorMode(true)} className={style.addBtn}>Add  new {noCard?.type}</button>
          
    </main>
  );
}

export default NoArticlesCard;
