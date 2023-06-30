import React, { useEffect, useState } from "react";
import style from "./article.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../App";
import NoArticlesCard from "../NoArticlesCard/NoArticlesCard";
import { useNavigate } from "react-router-dom";
function Article() {
  const {state, dispatch, articleId, setArticleId, editorMode, setEditorMode} = useContext(AppContext)

  const [articoli, setArticoli] = useState([]);
  const [deletedArticles, setDeletedArticles] = useState([])
  useEffect(() => {
    setArticoli(state[0]?.articles);

  }, [state]);

  const handleDeleteArticle = (articleID) => {
    const deleted = state[0]?.articles?.filter((article) => article?.id === articleID);
    setDeletedArticles((prev) => {
      return [...prev, ...deleted];
    });
    dispatch({ type: "DELETE_ARTICLE", selectedArticleID: articleID });
  }
  const navigate = useNavigate()
  return (
    <> 
       {articoli?.length > 0 ?        <button className={style.addBtn} onClick={() => setEditorMode(true)}>Create a new article</button>
 : null}
      {articoli?.length > 0 ? (
        
        articoli?.map((article) => {
          return (
            <div className={style.container} key={article?.id} >
              <div>
                <img
                  src={article?.image}
                  alt="images"
                  style={{ width: "100px", height: "100px", borderRadius: '10px' }}
                />
              </div>
              <div className={style.task}>
                <div className={style.info}>
                  <div>
                    <h3>{article?.title}</h3>
                  </div>
                  <div
                  >
                    <p>{article?.content?.blocks[0]?.text} ... <button className={style.addBtn2} onClick={() => {
              navigate('../fullarticle');
              setArticleId(article?.id);

            }}>View the full article</button></p>
                  </div>
                  <div className={style.date}>
                    <p>Created : {article?.created} </p>
                  </div>
                  <div className={style.tag}>
                   
                  </div>
                </div>
              </div>
              <div className={style.priority} style={{ marginLeft: "1rem" }} onClick={() => handleDeleteArticle(article?.id)}>
                <RiDeleteBinFill  />
              </div>
            </div>
          );
        })
      ) : (
       <NoArticlesCard setEditorMode={setEditorMode}/>
      )}
    </>
  );
}

export default Article;
