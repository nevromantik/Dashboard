import React from "react";
import style from "./signup.module.css";
import Logo from "../../../Components/Logo";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();

  return (
    <div className={style.loginContainer}>
      <header>
        <Logo />
      </header>
      <main className={style.loginFormWrap}>
        <form>
          <h1>Create Account </h1>
          <p>Get access to exclusive features by creating an account</p>
          <div className={style.inputEmailWrap}>
            <label for="name">Name</label>
            <input type="text" id="name"></input>
          </div>
          <div className={style.inputEmailWrap}>
            <label for="email">E-mail</label>
            <input type="email" id="email"></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Password</label>
            <input type="password" id="psw"></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Repeat password</label>
            <input type="password" id="psw"></input>
          </div>

          <div className={style.finalFormWrap}>
            <div className={style.rememberMeCheckbox}>
              <div className={style.checkboxWrap}>
                <label class="container">
                  I've read and accept the <span>Terms and Conditions</span>
                  <input type="checkbox"  />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  Subscribe to the newsletter to stay up to date
                  <input type="checkbox"  />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className={style.logBtnWrap}>
                <button>Create my account</button>
              </div>
            </div>
          </div>
          <div className={style.signUpWrap}>
            <p>
              Already have an account?{" "}
              <span
                className={style.signUpSpan}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
