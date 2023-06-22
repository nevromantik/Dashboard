import React from "react";
import style from "./createtaskform.module.css";
import container from "../../Pages/WelcomePage/welcome.module.css";
import { ReactDOM } from "react";
import { useReducer } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import uniqid from "uniqid";
// CSS Modules, react-datepicker-cssmodules.css//
import "react-datepicker/dist/react-datepicker-cssmodules.css";

function CreateTaskForm() {
  const [startDate, setStartDate] = useState(new Date());
  const { state, dispatch } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [categories, setCategories] = useState([
    { id: uniqid(), title: "Home" },
    { id: uniqid(), title: "Study" },
    { id: uniqid(), title: "Job" },
    { id: uniqid(), title: "Coding" },
  ])
  const handleAddTask = () => {
    const selected = categories?.find((el) => el?.id === categoryId);
    const day =  startDate.getDate();
    const month =  startDate.toLocaleString('en-EN', { month: 'long' }); 
    const year = startDate.getFullYear();
    const hour = startDate.getHours();
    const minute = startDate.getMinutes();
    // Ottenere il nome del mese
    
    let objString = `Due date: ${month} ${day} ${year} ${hour}:${minute}`
  
    const newTask = {
      id: uniqid(),
      title: title,
     category: selected?.title, // Utilizza direttamente il valore selezionato
     dueDate: objString,
      urgent: isUrgent,
      completed: false,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

  
  };
  console.log(state[0]?.tasks)

  return (
    <div className={` ${style.container}`}>
      <div className={style.wrap}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          <h3>Create a new task</h3>
          <div className={style.title}>
            <p>Task title</p>
            <input
              type="text"
              placeholder="Enter task title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={style.date}>
              <p>Due date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                 setStartDate(date)
                }}
                dateFormat="Pp"
                showTimeSelect
                timeFormat="p"
                minDate={new Date()}
              />  
            
            </div>
            <div>
              <p>Add a new category</p>
              <input type="text" placeholder="Add a new category" />
            </div>
            <div>
              <p>Categories</p>
             <div className={style.tag}>
                {categories?.map((category) => {
                  return (
                    <div
                      key={category.id}
                      onClick={(e) => {
                      
                        setCategoryId(category.id);
                      }}
                    >
                      <p>{category.title}</p>
                    </div>
                  );
                })}
              </div> 
              <div>
                <p>It is urgent ?</p>
                <div className={style.tag} onClick={() => setIsUrgent(true)}>
                  <div >
                    <p>YEAH</p>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className={style.addBtn}>
              Add this new task!
            </button>
          </div>
        </form>
      </div>

     
    </div>
  );
}

export default CreateTaskForm;
