import React, { useState } from 'react';
import {stateToHTML} from 'draft-js-export-html';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DOMPurify from 'dompurify';
import { convertFromRaw } from 'draft-js';
import '../ArticlePage/editor.css';
import uniqid from 'uniqid'; 

import Article
 from '../../Components/Articles/Article';
import style from '../../Components/Tasks/taskslist.module.css';
import { FaTasks } from 'react-icons/fa';
function ArticlesPage() {







 /*return <div className={style.container}>
      <div className={style.header}>
        <h2>Articles</h2>
        <button >
          Create Article
        </button>
      </div>
      <div className={style.menuwrap}>
        <div className={style.menu}>
          <div >
            <p>All Articles</p>
          </div>
          <div >
            <p>Deleted Articles</p>
          </div>
         
        </div>
      </div>

      <div className={style.tasksWrap}>
        <section>
          <div className={style.allTasks}>
            <div className={style.first}>
              <FaTasks style={{ color: "#8705D2", marginRight: "1rem" }} />
              <p>Articles</p>
            </div>
            <div className={style.count}>
             null
            </div>
          </div>
        </section>
        <div className={style.task}>
          <Article/>
        </div>
       
      </div>
    </div>



*/
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState([]);
  const [dataArticle, setDataArticle] = useState({})
  useEffect(() => {
    
    let data = convertToRaw(editorState.getCurrentContent());
    let html = stateToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    setDataArticle(data)
    console.log(data)
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  } 
  const addArticle = () => {
   const article = {
    id: uniqid(),
    title: title,
    content: dataArticle,
    html: convertedContent,
   };

   setArticles((prev) => {
    return [...prev, article]
   });
  
  }

  console.log(articles, 'articles')
  
  return (
    <div className="editor">
     {articles?.map((article) => {
      return <div
      className="article-head"
      dangerouslySetInnerHTML={createMarkup(article?.html)}
      key={article?.id}>
    </div> 
     })}
  <form onSubmit={(e) => {
    e.preventDefault();
    addArticle()
  }}>
  <input type='text' placeholder='ARTICLE TITLE' onChange={(e) => setTitle(e.target.value)}/>
  <Editor
         editorState={editorState}
         onEditorStateChange={setEditorState}
         wrapperClassName="wrapper-class"
         editorClassName="editor-class"
         toolbarClassName="toolbar-class"
         toolbar={{
           options: ['inline', 'blockType']
         }}
      />
      <button type='submit'>Create a new article</button>
  </form>

     
    </div>
  )
}

export default ArticlesPage