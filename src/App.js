import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useContext, createContext } from "react";
import LoginLayout from "./Pages/LoginLayout/LoginLayout";
import Login from "./Pages/LoginLayout/Login/Login";
import SignUp from "./Pages/LoginLayout/SignUp/SignUp";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import WelcomeHome from "./Pages/DashboardLayout/WelcomeHome/WelcomeHome";
export const AppContext = createContext(null);

function App() {
  return (
    <div className="App">
      <AppContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path='dashboard' element={<DashboardLayout/>}>
              <Route index element={<WelcomeHome/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
