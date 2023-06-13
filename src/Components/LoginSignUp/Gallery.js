import React, { useState } from "react";
import style from "./logingallery.module.css";
import uniqid from "uniqid";
function Gallery() {
  const [dataGallery, setDataGallery] = useState([
    {
      id: uniqid(),
      h1: "Task Board",
      p: "A task board where you can keep track of your activities. ",
    },
    {
      id: uniqid(),
      h1: "Weather",
      p: "You can check the weather forecast for your city or other selected locations.",
    },
    {
      id: uniqid(),
      h1: "ChatGpt",
      p: " You can use artificial intelligence to create stories, ask for information, and other utilities.",
    },
    {
      id: uniqid(),
      h1: "Book tracker",
      p: " You can keep track of your favorite books.",
    },
  ]);

  const [index, setIndex] = useState(0);
  const leftSlide = () => {
    setIndex((prev) => {
      return prev - 1;
    });
    if (index <= 0) {
      setIndex(3);
    }
  };

  const rightSlide = () => {
    setIndex((prev) => {
      return prev + 1;
    });
    if (index >= 3) {
      setIndex(0);
    }
  };
  return (
    <div className={style.galleryWrap}>
      <div className={style.galleryData}>
        <h1>{dataGallery[index]?.h1}</h1>
        <p>{dataGallery[index]?.p}</p>
      </div>

      <div className={style.galleryInput}>
        <button
          onClick={(e) => {
            e.preventDefault();
            leftSlide();
          }}
          className={style.galleryBtn1}
        ></button>
        <div className={style.galleryTracker}>
          <div className={style.track}>
          
          </div>
          <div className={style.track}>
         
          </div>
          <div className={style.track}>
          
            
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            rightSlide();
          }}
          className={style.galleryBtn2}
        ></button>
      </div>
    </div>
  );
}

export default Gallery;
