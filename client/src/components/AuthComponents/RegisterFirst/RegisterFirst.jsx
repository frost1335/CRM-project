import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../authComponent.scss";

const RegisterFirst = () => {
  const [emailFocus, setEmailFocus] = useState("");
  const [numberFocus, setNumberFocus] = useState("");

  document.addEventListener("focusin", function (e) {
    if (e.target.type === "email") {
      setEmailFocus("active");
      setNumberFocus("");
    } else if (e.target.type === "tel") {
      setEmailFocus("");
      setNumberFocus("active");
    } else {
      setEmailFocus("");
      setNumberFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    if (e.target.type === "email") setEmailFocus("");
    else if (e.target.type === "tel") setNumberFocus("");
  });

  return (
    <div className="Auth_component">
      <h3>Welcome</h3>
      <h6>lets get started with a few simple steps!</h6>

      <form action="">
        <div className="input_form">
          <label htmlFor="email">E-mail*</label>
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
          <label htmlFor="number">Phone number*</label>
          <input
            type="tel"
            autoComplete="off"
            placeholder="+1  (000) 000-0000"
            id="number"
          />
          <span className={`input_helper ${numberFocus}`}>
            Please, enter your work telephone number
          </span>
        </div>
        <div className="button_form">
          <button type="submit">Get started</button>
        </div>
      </form>

      <p>
        You have a code?{" "}
        <Link to={"/login"} className="form_link">
          Join your team
        </Link>
      </p>
    </div>
  );
};

export default RegisterFirst;
