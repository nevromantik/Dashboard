import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useReducer, createContext } from "react";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import Login from "./Pages/LoginLayout/Login/Login";
import SignUp from "./Pages/LoginLayout/SignUp/SignUp";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import { USERS, CURRENTUSER } from "./Data/Data";
import uniqid from "uniqid";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
export const AppContext = createContext(null);

const initialState = CURRENTUSER;
function reducer(state, action) {
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return [action.payload];
    
    default:
      return state;
  }
}
function App() {
 

  const [users, setUsers] = useState(USERS);
 
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          users,
          setUsers,
          state,
          dispatch,
        
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<WelcomePage/>}/>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
