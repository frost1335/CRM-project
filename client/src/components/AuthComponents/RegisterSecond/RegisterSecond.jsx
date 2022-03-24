import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../authComponent.scss";

const RegisterSecond = () => {
  const [nameFocus, setNameFocus] = useState("");
  const [emailFocus, setEmailFocus] = useState("");
  const [passwordFocus, setPasswordFocus] = useState("");
  const [repeatFocus, setReapetFocus] = useState("");

  document.addEventListener("focusin", function (e) {
    console.log(e.target.dataset.focus);
    switch (e.target.dataset.focus) {
      case "full-name":
        setNameFocus("active");
        setEmailFocus("");
        setPasswordFocus("");
        setReapetFocus("");
        break;
      case "email":
        setNameFocus("");
        setEmailFocus("active");
        setPasswordFocus("");
        setReapetFocus("");
        break;
      case "password":
        setNameFocus("");
        setEmailFocus("");
        setPasswordFocus("active");
        setReapetFocus("");
        break;
      case "repeat":
        setNameFocus("");
        setEmailFocus("");
        setPasswordFocus("");
        setReapetFocus("active");
        break;
      default:
        setNameFocus("");
        setEmailFocus("");
        setPasswordFocus("");
        setReapetFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    switch (e.target.dataset.focus) {
      case "full-name":
        setNameFocus("");
        break;
      case "email":
        setEmailFocus("");
        break;
      case "password":
        setPasswordFocus("");
        break;
      case "repeat":
        setReapetFocus("");
        break;
      default:
        return "";
    }
  });

  return (
    <div className="Auth_component component2">
      <h3>Registration</h3>

      <form action="">
        <div className="input_form">
          <label htmlFor="email">Your E-mail*</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="E-mail"
            data-focus="email"
            id="email"
          />
          <span className={`input_helper ${emailFocus}`}>
            Please, enter your work e-mail
          </span>
        </div>
        <div className="input_form">
          <label htmlFor="username">Username*</label>
          <input
            type="text"
            data-focus="username"
            autoComplete="off"
            placeholder="Username"
            id="username"
          />
          <span className={`input_helper ${nameFocus}`}>
            Please, enter your username
          </span>
        </div>
        <div className="input_form">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Create password"
            data-focus="password"
            id="password"
          />
          <span className={`input_helper ${passwordFocus}`}>
            Please, enter your safe password
          </span>
        </div>
        <div className="input_form">
          <label htmlFor="repeat">Repeat*</label>
          <input
            type="password"
            autoComplete="off"
            data-focus="repeat"
            placeholder="Repeat password"
            id="reapeat"
          />
          <span className={`input_helper ${repeatFocus}`}>
            Please, repeat your password
          </span>
        </div>
        <div className="button_form">
          <button type="submit">Registration</button>
        </div>
      </form>

      <p className="privacy">
        By continuing, you’re agreeing to our{" "}
        <Link to={"terms"} className="privacy_link">
          Customer Terms of Service
        </Link>
        , and{" "}
        <Link to={"privacy"} className="privacy_link">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default RegisterSecond;
