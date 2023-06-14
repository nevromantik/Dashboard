import React from "react";
import style from "./login.module.css";
import Logo from "../../../Components/Logo";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { useContext, useState } from "react";

function Login() {
  const { users, setUsers, state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [error, setError] = useState(""); // Frase da aggiungere come modale che scende dall'alto per segnalare l'errore
  const handleMatchUser = () => {
    const exist = users?.some(
      (user) => user.email === checkEmail && user.password === checkPass
    );
    if (exist) {
      const currentUser = users?.find(
        (user) => user.email === checkEmail && user.password === checkPass
      );
      setError(false);
      dispatch({type: 'ADD_CURRENT_USER', payload: currentUser})
    } else {
      setError(
        "I'm sorry, but you need to enter a correct email and/or password."
      );
    }
    navigate("dashboard");
  };

  return (
    <div className={style.loginContainer}>
      <header>
        <Logo />
      </header>
      <main className={style.loginFormWrap}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleMatchUser();
          }}
        >
          <h1>Log in </h1>
          <p>
            Welcome to my Dashboard, please put your login credentials below to{" "}
            <br />
            start using the app
          </p>
          <div className={style.inputEmailWrap}>
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setCheckEmail(e.target.value)}
            ></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Password</label>
            <input
              type="password"
              id="psw"
              onChange={(e) => setCheckPass(e.target.value)}
            ></input>
          </div>
          <div className={style.forgotPswWrap}>
            <p>Forgot password? </p>
          </div>
          <div className={style.finalFormWrap}>
            <div className={style.rememberMeCheckbox}>
              <label class="container">
                Remember me
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className={style.logBtnWrap}>
              <button type="submit">Log in</button>
            </div>
          </div>
          <div className={style.signUpWrap}>
            <p>
              Don't have an account?{" "}
              <span
                className={style.signUpSpan}
                onClick={() => {
                  navigate("signup");
                }}
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
