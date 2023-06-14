import React, { useState } from "react";
import style from "./signup.module.css";
import Logo from "../../../Components/Logo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";
import uniqid from "uniqid";
function SignUp() {
  const navigate = useNavigate();
  const { users, setUsers, state, dispatch } = useContext(AppContext); // aggiungi nuovo utente a users (usestate), inseriscilo in currentuser (usereducer) e reindirizza tutto in dashboard
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [fullName, setFullname] = useState("");

  const handleCreateNewUser = () => {
    const isEqual = users?.some((user) => user.email === email);
    if (!fullName || !email || !password) {
      alert("Compila tutti i campi");
    } else if (password !== repeatPass) {
      alert("Le password non coincidono");
    } else if (isEqual) {
      alert(
        "Esiste già un utente associato a quella email, inserisci una nuova o fai login"
      );
    } else {
      const newUser = {
        id: uniqid(),
        fullname: fullName,
        email: email,
        password: password,
        tasks: [],
      };
      setUsers((prev) => {
        return [...prev, newUser];
      });

    }
    const isAdded = users?.some((user) => user.email === email && user.password === password);
    
    if(isAdded){
      const currentUser = users?.find((user) => user.email === email && user.password === password)
      dispatch({type: 'ADD_CURRENT_USER', payload: currentUser});
      navigate('/dashboard')
    }
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
            handleCreateNewUser();
          }}
        >
          <h1>Create Account </h1>
          <p>Get access to exclusive features by creating an account</p>
          <div className={style.inputEmailWrap}>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setFullname(e.target.value)}
            ></input>
          </div>
          <div className={style.inputEmailWrap}>
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Password</label>
            <input
              type="password"
              id="psw"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className={style.inputPasswordWrap}>
            <label for="psw">Repeat password</label>
            <input
              type="password"
              id="psw"
              onChange={(e) => setRepeatPass(e.target.value)}
            ></input>
          </div>

          <div className={style.finalFormWrap}>
            <div className={style.rememberMeCheckbox}>
              <div className={style.checkboxWrap}>
                <label class="container">
                  I've read and accept the <span>Terms and Conditions</span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  Subscribe to the newsletter to stay up to date
                  <input type="checkbox" />
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
