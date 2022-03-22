import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../authComponent.scss";

const Login = () => {
  const [emailFocus, setEmailFocus] = useState("");
  const [passwordFocus, setPasswordFocus] = useState("");

  document.addEventListener("focusin", function (e) {
    if (e.target.type === "email") {
      setEmailFocus("active");
      setPasswordFocus("");
    } else if (e.target.type === "password") {
      setEmailFocus("");
      setPasswordFocus("active");
    } else {
      setEmailFocus("");
      setPasswordFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    if (e.target.type === "email") setEmailFocus("");
    else if (e.target.type === "password") setPasswordFocus("");
  });

  return (
    <div className="Auth_component">
      <h3>Welcome back!</h3>
      <h6>Please, enter your e-mail or phone number to login</h6>

      <form action="">
        <div className="input_form">
          <label htmlFor="email">E-mail or phone number</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="user@email.com"
            id="email"
          />
          <span className={`input_helper ${emailFocus}`}>
            Please, enter your work e-mail
          </span>
        </div>
        <div className="input_form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            id="password"
          />
          <span className={`input_helper ${passwordFocus}`}>
            Please, enter your password
          </span>
        </div>
        <div className="button_form">
          <button type="submit">Sign in</button>
        </div>
      </form>

      <p>
        Do not have an account?{" "}
        <Link to={"/login"} className="form_link">
          Registration
        </Link>
      </p>
    </div>
  );
};

export default Login;
