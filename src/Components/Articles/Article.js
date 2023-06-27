import React, { useEffect, useState } from "react";
import style from "./article.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../App";
import NoArticlesCard from "../NoArticlesCard/NoArticlesCard";
function Article({  createMarkup, setEditorMode }) {
  const {state, dispatch} = useContext(AppContext)

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
  return (
    <> 

      {articoli?.length > 0 ? (
        articoli?.map((article) => {
          return (
            <div className={style.container} key={article?.id}>
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
                    dangerouslySetInnerHTML={createMarkup(article?.html)}
                  ></div>
                  <div className={style.date}>
                    <p>Created : </p>
                  </div>
                  <div className={style.tag}>
                    <div>
                      <p>Category..</p>
                    </div>
                    <div></div>
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
