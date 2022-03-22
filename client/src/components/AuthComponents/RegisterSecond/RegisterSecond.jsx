import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../authComponent.scss";

const RegisterSecond = () => {
  const [nameFocus, setNameFocus] = useState("");
  const [jobFocus, setJobFocus] = useState("");
  const [passwordFocus, setPasswordFocus] = useState("");
  const [repeatFocus, setReapetFocus] = useState("");

  document.addEventListener("focusin", function (e) {
    console.log(e.target.dataset.focus);
    switch (e.target.dataset.focus) {
      case "full-name":
        setNameFocus("active");
        setJobFocus("");
        setPasswordFocus("");
        setReapetFocus("");
        break;
      case "job":
        setNameFocus("");
        setJobFocus("active");
        setPasswordFocus("");
        setReapetFocus("");
        break;
      case "password":
        setNameFocus("");
        setJobFocus("");
        setPasswordFocus("active");
        setReapetFocus("");
        break;
      case "repeat":
        setNameFocus("");
        setJobFocus("");
        setPasswordFocus("");
        setReapetFocus("active");
        break;
      default:
        setNameFocus("");
        setJobFocus("");
        setPasswordFocus("");
        setReapetFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    switch (e.target.dataset.focus) {
      case "full-name":
        setNameFocus("");
        break;
      case "job":
        setJobFocus("");
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
      <h3>Detail information</h3>

      <form action="">
        <div className="input_form">
          <label htmlFor="fullname">Full name*</label>
          <input
            type="text"
            data-focus="full-name"
            autoComplete="off"
            placeholder="Text"
            id="fullname"
          />
          <span className={`input_helper ${nameFocus}`}>
            Please, enter your full name
          </span>
        </div>
        <div className="input_form">
          <label htmlFor="job">Your Job*</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Job"
            data-focus="job"
            id="job"
          />
          <span className={`input_helper ${jobFocus}`}>
            Please, enter your current job
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
