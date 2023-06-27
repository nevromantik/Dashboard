import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useReducer, createContext } from "react";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import Login from "./Pages/LoginLayout/Login/Login";
import SignUp from "./Pages/LoginLayout/SignUp/SignUp";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import { USERS, CURRENTUSER } from "./Data/Data";
import uniqid from "uniqid";
import Inbox from "./Pages/TasksPage/Inbox/Inbox";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import ArticlesPage from "./Pages/ArticlePage/ArticlesPage";
export const AppContext = createContext(null);

const initialState = CURRENTUSER;
function reducer(state, action) {
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return [action.payload];

    case "ADD_TASK":
      const updatedTasks = [...state[0]?.tasks, action.payload];
      return [{ ...state[0], tasks: updatedTasks }];
    case "DELETE_TASK":
      const filtered = state[0]?.tasks?.filter(
        (task) => task?.id !== action.selectedTaskId
      );
      const filteredTasks = [...filtered];
      return [{ ...state[0], tasks: filteredTasks }];

    case "COMPLETE_TASK":
      const x = state[0]?.tasks?.map((task) => {
        if (task.id === action.taskId) {
          return { ...task, completed: true };
        }
        return task;
      });
      return [{ ...state[0], tasks: x }];

    case "UPDATE_TASK":
      const UPDATED = state[0]?.tasks?.map((task) => {
        if (task.id === action.taskId) {
          return { ...action.payload };
        }
        return task;
      });
      return [{ ...state[0], tasks: UPDATED }];
    case "ADD_ARTICLE": 
    const updatedArticles = [...state[0]?.articles, action.payload];
    return [{ ...state[0], articles: updatedArticles }];

    case "DELETE_ARTICLE":
      const filteredArticles = state[0]?.articles?.filter(
        (article) => article?.id !== action.selectedArticleID
      );
      const articles = [...filteredArticles];
      return [{ ...state[0], articles: articles }];
    default:
      return state;
  }
}
function App() {
  const [users, setUsers] = useState(USERS);

  const [state, dispatch] = useReducer(reducer, initialState);

  const [displayForm, setDisplayForm] = useState("create task");
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});

  const [taskId, setTaskId] = useState("");
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          users,
          setUsers,
          state,
          dispatch,
          displayForm,
          setDisplayForm,
          deletedTasks,
          setDeletedTasks,
          completedTasks,
          setCompletedTasks,
          selectedTask,
          setSelectedTask,
          taskId,
          setTaskId,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<WelcomePage />} />
              <Route path="tasks" element={<Inbox />} />
              <Route path="articles" element={<ArticlesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
