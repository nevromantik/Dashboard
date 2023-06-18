import React, { useContext, useState } from 'react'
import style from './searchbar.module.css';
import {BiSearchAlt2} from 'react-icons/bi';
import {TbMoonFilled} from 'react-icons/tb';
import {BsFillSunFill} from 'react-icons/bs';
import {SlSettings} from 'react-icons/sl';
import {IoMdArrowDropdown} from 'react-icons/io';
import tasksIcon from '../../Assets/Navbar/icons8-task-48.png'
import logo from '../../Assets/Logo/hexagon_abstract_modern_logo_preview_rev_1 (1).png'
import { useLocation, useNavigate } from 'react-router-dom';
import {CgMenuGridR} from 'react-icons/cg'
import { AppContext } from '../../App';
import { useRef, useEffect } from 'react';
import {FaTasks, FaRobot, FaBook, FaHome} from 'react-icons/fa';

function SearchBar({state}) {
  const [isLightMode, setIsLightMode] = useState(false);
  const navigate = useNavigate();
 const {ishover, setHover} = useContext(AppContext) ; 
 const location = useLocation()
 console.log(location.pathname)
  return (
    <>
    <div className={style.searchBarWrap}>
       <div className={style.taskLogo}>
            
          </div> 
          
        <div className={style.taskInputWrap}>
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
   
    <div onMouseEnter={() => setHover(!ishover)} >
        <CgMenuGridR
         
          style={{
            color: 'white',
            position: 'relative',
            bottom: '2.8rem',
            left: '55rem',
            zIndex: '1000',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        />
      </div>
      {ishover ? <div className={style.navbar}>
        <div>
          {location.pathname === '/dashboard/tasks' ? < FaHome style={{color: 'white', fontSize: '1.7rem'}} onClick={() => {
            navigate('./')
          }}/> :    < FaTasks style={{color: 'white', fontSize: '1.4rem'}} onClick={() => {
            navigate('tasks')
          }}/>}
          
        </div>
        <div>
          <FaBook style={{color: 'white', fontSize: '1.4rem'}} alt='icon for books' onClick={() => {
            navigate('books')
          }}/>
        </div>
        <div>
          <FaRobot style={{color: 'white', fontSize: '1.5rem'}} onClick={() => {
            navigate('ai')
          }}/>
        </div>
      </div> : null}
    </>
  )
}

export default SearchBar