import React, { useState } from 'react'
import style from './searchbar.module.css';
import {BiSearchAlt2} from 'react-icons/bi';
import {TbMoonFilled} from 'react-icons/tb';
import {BsFillSunFill} from 'react-icons/bs';
import {SlSettings} from 'react-icons/sl';
import {IoMdArrowDropdown} from 'react-icons/io'
function SearchBar({state}) {
  const [isLightMode, setIsLightMode] = useState(false)
  return (
    <div className={style.searchBarWrap}>
        <div className={style.inputWrap}>
            <BiSearchAlt2/>
            <input type='text' placeholder='Search for...'/>
        </div>
        <div className={style.iconsWrap}>
          <div style={{cursor:'pointer'}} className={style.icon}>
          {isLightMode ? <TbMoonFilled onClick={() => setIsLightMode(false)} style={{fontSize:'1.3rem'}}/> : <BsFillSunFill onClick={() => setIsLightMode(true)} style={{fontSize:'1.3rem'}}/>}

          </div>
          <div className={style.icon}>
           <SlSettings style={{fontSize:'1.2rem'}}/>
          </div>
             <div className={style.icon}>  <p>{state[0]?.fullname}</p> <IoMdArrowDropdown style={{fontSize:'1.2rem', position: 'relative', left:'0.3rem'}}/></div>
          
        </div>
    </div>
  )
}

export default SearchBar