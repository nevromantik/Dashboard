import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useReducer, createContext } from "react";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import Login from "./Pages/LoginLayout/Login/Login";
import SignUp from "./Pages/LoginLayout/SignUp/SignUp";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import WelcomeHome from "./Pages/DashboardLayout/WelcomeHome/WelcomeHome";
import TasksPage from "./Pages/TasksPage/TasksPage";
import { USERS, CURRENTUSER } from "./Data/Data";
import uniqid from "uniqid";
export const AppContext = createContext(null);

const initialState = CURRENTUSER;
function reducer(state, action) {
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return [action.payload];
    case "COMPLETE_TASK":
      const taskId = action.payload;
      const updatedTask = state[0]?.tasks?.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      });
      return [{ ...state[0], tasks: updatedTask }];

    case "CHANGE_CATEGORYTITLE":
      const currentCatTitle = action.payload;
      const updatedCatTask = state[0]?.tasks?.map((task) => {
        if (task.category === currentCatTitle) {
          return { ...task, category: action.newCatTitle };
        }
        return task;
      });

      return [{ ...state[0], tasks: updatedCatTask }];

    case "DELETE_CATEGORY":
      const updatedFilteredTask = state[0]?.tasks?.filter((task) => {
        return task?.category !== action.catTitle;
      });
      return [{ ...state[0], tasks: updatedFilteredTask }];

    default:
      return state;
  }
}
function App() {
  const [category, setCategory] = useState([
    {
      categoryTitle: "work",
      categoryId: uniqid(),
    },
    { categoryTitle: "study", categoryId: uniqid() },
  ]);

  const [users, setUsers] = useState(USERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ishover, setHover] = useState(false);
  const [currentCatTitle, setCurrentCatTitle] = useState("");

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          users,
          setUsers,
          state,
          dispatch,
          isModalOpen,
          setIsModalOpen,
          ishover,
          setHover,
          category,
          setCategory,
          currentCatTitle,
          setCurrentCatTitle,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<WelcomeHome />} />
              <Route path="tasks" element={<TasksPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
