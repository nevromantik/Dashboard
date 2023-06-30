import React from "react";
import style from "./dasharticle.module.css";
import articleimg from "../../Assets/Cards/primo-piano-sulle-foglie-verdi-in-natura.jpg";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoArticlesCard from "../NoArticlesCard/NoArticlesCard";
import noArticle from "../../Assets/NoCard/icons8-book-64.png";
import noTasks from "../../Assets/NoCard/icons8-task-64.png";
import noProject from "../../Assets/NoCard/icons8-project-64.png";

function DashArticlesCard() {
  const { state, setArticleId, setEditorMode } = useContext(AppContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articoli = state[0]?.articles?.slice(0, 4);

    setArticles(articoli);
  }, [state]);
  const navigate = useNavigate();

  const [noCard, setNoCard] = useState([
    { type: "articles", img: noArticle },
    { type: "tasks", img: noTasks },
    { type: "projects", img: noProject },
  ]);
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
        {articles?.length > 0
          ? articles?.map((article) => {
              return (
                <div
                  className={style.article}
                  key={article?.id}
                  onClick={() => {
                    navigate("fullarticle");
                    setArticleId(article?.id);
                  }}
                >
                  <img src={article?.image} alt="article" />
                  <h4>{article?.title}</h4>
                  <p>{article?.content?.blocks[0]?.text} </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default DashArticlesCard;
