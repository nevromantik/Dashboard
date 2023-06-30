import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import DOMPurify from "dompurify";
import style from "./fullarticle.module.css";
function FullArticle() {
  const { state, articleId } = useContext(AppContext);
  const [currentArticle, setCurrentArticle] = useState([]);
  useEffect(() => {
    const current = state[0]?.articles?.find(
      (article) => article?.id === articleId
    );
    setCurrentArticle(current);
  }, [articleId, state?.articles, currentArticle, state]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  return (
    <div className={style.container}>
      <h1>{currentArticle?.title}</h1>
      <p>Created: {currentArticle?.created}</p>
      <div className={style.imgWrap}>
      <img src={currentArticle?.image} alt="article imag"></img>

      </div>
      <div dangerouslySetInnerHTML={createMarkup(currentArticle?.html)}></div>
    </div>
  );
}

export default FullArticle;
