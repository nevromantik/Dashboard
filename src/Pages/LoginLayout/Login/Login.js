import React from "react";
import style from "./login.module.css";
import Logo from "../../../Components/Logo";
function Login() {
  return (
    <div className={style.loginContainer}>
      <header>
        <Logo />
      </header>
      <main className={style.loginFormWrap}>
        <form>
          <h1>Log in </h1>
          <p>
            Welcome to my Dashboard, please put your login credentials below to{" "}
            <br />
            start using the app
          </p>
          <div className={style.inputEmailWrap}>
            <label for="email">E-mail</label>
            <input type="email" id="email"></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Password</label>
            <input type="password" id="psw"></input>
          </div>
          <div className={style.forgotPswWrap}>
            <p>Forgot password? </p>
          </div>
          <div className={style.finalFormWrap}>
            <div className={style.rememberMeCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Remember me</label>
            </div>
            <div className={style.logBtnWrap}>
              <button>Log in</button>
            </div>
          </div>
          <div className={style.signUpWrap}>
            <p>
              Don't have an account?{" "}
              <span className={style.signUpSpan}>Sign up</span>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
