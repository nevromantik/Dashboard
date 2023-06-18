import React from "react";
import style from "./categorybar.module.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { RiAddFill } from "react-icons/ri";
import uniqid from "uniqid";
import { TbMenu } from "react-icons/tb";
import { BsFillHouseFill, BsBookFill, BsBookshelf } from "react-icons/bs";

function CategoryBar() {
  const {
    state,
    dispatch,
    category,
    setCategory,
    currentCatTitle,
    setCurrentCatTitle,

  } = useContext(AppContext);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [updatedCategoryTitle, setUpdatedCategoryTitle] = useState("");


  
  
 
  const handleAddCategory = () => {
    // aggiunge nuove categorie a category ma ovviamente non allo state, mi servirà poi per filtrare i tasks
    const newCategory = {
      categoryTitle: newCategoryTitle,
      categoryId: uniqid(),
    };
    setCategory((prev) => {
      return [...prev, newCategory];
    });
  };

  const handleChangeCategoryTitle = () => {
    // modifica nome categoria in category e al tempo stesso anche ai task dello stato che hanno category === al categorytitle selezionato
    const updated = category?.map((cat) => {
      if (cat?.categoryTitle === currentCatTitle) {
        return { ...cat, categoryTitle: updatedCategoryTitle };
      }
      return cat;
    });
    setCategory(updated);
    dispatch({
      type: "CHANGE_CATEGORYTITLE",
      payload: currentCatTitle,
      newCatTitle: updatedCategoryTitle,
    });
  };

  const handleDataTitle = (e) => {
    // mi fornisce 1) il valore del data attribute del categorytitle selezionato, 2) il valore del nuovo titolo. Tutto ciò verrà inviato dal form in fase di onsubmit
    const dataTitleCat = e.target.dataset.title;
    setCurrentCatTitle(dataTitleCat);
    setUpdatedCategoryTitle(e.target.value);
  };

  const handleDeleteCategory = (title) => {
    // eliminando la categoria da category, elimino poi dallo stato i task il cui category titolo è uguale alla categoria eliminata, aggiungere modale se utente è sicuro di farlo 
    setCategory((prev) => prev?.filter((cat) => cat?.categoryTitle !== title));
    dispatch({type: 'DELETE_CATEGORY', catTitle: title})
  };


  return (
    <div className={style.categoryWrap}>
      {category?.map((cat) => {
        return (
          <div key={cat?.categoryId} className={style.category} onClick={() => {
            setCurrentCatTitle(cat?.categoryTitle)
          }}>
            <div className={style.catIcons}>
              {cat?.categoryTitle === "study" ? <BsBookFill /> : null}
              {cat?.categoryTitle === "work" ? <BsBookshelf /> : null}
              {cat?.categoryTitle === "home" ? <BsFillHouseFill /> : null}
              {cat?.categoryTitle !== "study" &&
              cat?.categoryTitle !== "work" &&
              cat?.categoryTitle !== "home" ? (
                <TbMenu />
              ) : null}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleChangeCategoryTitle();
              }}
            >
              <div className={style.inputCategory}
              >
                {" "}
                <input
                  type="text"
                  placeholder={cat?.categoryTitle}
                  data-title={cat?.categoryTitle}
                  onChange={handleDataTitle}
                />{" "}
                <button
                type='submit'
                  data-title={cat?.categoryTitle}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteCategory(cat?.categoryTitle)
                  }}

                >
                  DEL
                </button>
              </div>
            </form>
          </div>
        );
      })}
      <form
        className={style.addCategoryForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddCategory();
        }}
      >
        <button type="submit">
          <RiAddFill style={{ fontSize: "1.5rem", color: "white" }} />
        </button>
        <div className={style.addCategory}>
          {" "}
          <input
            type="text"
            placeholder="Add category"
            onChange={(e) => setNewCategoryTitle(e.target.value)}
          />{" "}
        </div>
      </form>
    </div>
  );
}

export default CategoryBar;
