import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useReducer, createContext } from "react";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import Login from "./Pages/LoginLayout/Login/Login";
import SignUp from "./Pages/LoginLayout/SignUp/SignUp";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import WelcomeHome from "./Pages/DashboardLayout/WelcomeHome/WelcomeHome";
import TasksPage from "./Pages/TasksPage/TasksPage";
import {USERS, CURRENTUSER} from './Data/Data';
export const AppContext = createContext(null);

const initialState = CURRENTUSER; 
function reducer(state, action){
  switch(action.type){
    case 'ADD_CURRENT_USER': 
    return [ action.payload];
    case 'COMPLETE_TASK': 
    const taskId = action.payload; 
    const updatedTask = state[0]?.tasks?.map(task => {
      if(task.id === taskId){
        return {...task, completed: true}
      }
      return task;
    });
    return [{...state[0], tasks: updatedTask}]
    default: 
    return state; 
  }
}
function App() {
  const [users, setUsers] = useState(USERS); 
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AppContext.Provider value={{users, setUsers, state, dispatch, isModalOpen, setIsModalOpen}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path='dashboard' element={<DashboardLayout/>}>
              <Route index element={<WelcomeHome/>}/>
              <Route path='tasks' element={<TasksPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
