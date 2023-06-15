import React from 'react'
import style from './categorymodal.module.css';
import arrowTop from '../../Assets/Modal/icons8-slide-up-48.png';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../App';
function CategoryModal() {
  const {state, dispatch, isModalOpen, setIsModalOpen} = useContext(AppContext);
  const [category, setCategory] = useState([]); 
  useEffect(() => {
    const categories = state?.map(obj => obj.tasks.map(task => task.category)).flat();
    const uniqueCategories = [...new Set(categories)];
    setCategory(uniqueCategories);

  }, [state]);
console.log(category)
  
  return (
    <div className={style.modalWrap}>
        <div className={style.modal}>
            <div className={style.categories}>
                {category?.map((cat, index) => {
                    return <div key={ index}>{cat}</div>
                })}
            </div>
            {isModalOpen ? <img src={arrowTop} alt='ok' className={style.arrowIcon} onClick={() => {
                setIsModalOpen(false)
            }}/> : null}
        </div>
    </div>
  )
}

export default CategoryModal