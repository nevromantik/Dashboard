import React, { useState } from "react";
import { stateToHTML } from "draft-js-export-html";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";
import { convertFromRaw } from "draft-js";
import "../ArticlePage/editor.css";
import uniqid from "uniqid";
import { RiArrowDropUpFill } from "react-icons/ri";
import Article from "../../Components/Articles/Article";
import style from "./articlespage.module.css";
import { FaTasks } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../App";

function ArticlesPage() {
  const { state, dispatch , editorMode, setEditorMode} = useContext(AppContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState("");
  const [articles, setArticles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDefaultImages, setShowDefaultImages] = useState(false);
  const [dataArticle, setDataArticle] = useState({});

  const [date, setDate] = useState('')

  useEffect(() => {
    let data = convertToRaw(editorState.getCurrentContent());
    let html = stateToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    setDataArticle(data);
    console.log(data);
  }, [editorState]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }
 
  const addArticle = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const dateString = `${day} ${month} ${year} alle ore ${hours}:${minutes}`;

    const article = {
      id: uniqid(),
      title: title,
      content: dataArticle,
      html: convertedContent,
      image: selectedImage,
      created: dateString
    };

    setArticles((prev) => [...prev, article]);
    dispatch({ type: "ADD_ARTICLE", payload: article });

    setTimeout(() => {
      setEditorMode(false);
    }, 1000);
  };
  console.log(articles)
  return (
    <>
      <div className="editor">
        {!editorMode ? (
          <Article createMarkup={createMarkup} setEditorMode={setEditorMode} />
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addArticle();
            }}
            className={style.form}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
                options: ["inline", "blockType"],
              }}
            />
            <div className={style.inputFields}>
              <div>
                <h3> Insert title</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Insert Article Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <h3> Insert image</h3>
              </div>
              <div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                />
              </div>
         
            </div>

            <button type="submit" className={style.addBtn}>
              Create a new article
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default ArticlesPage;
