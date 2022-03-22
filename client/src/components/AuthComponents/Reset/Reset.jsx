import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Reset = () => {
  const [passwordFocus, setPasswordFocus] = useState("");

  document.addEventListener("focusin", function (e) {
    if (e.target.type === "password") {
      setPasswordFocus("active");
    } else {
      setPasswordFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    if (e.target.type === "password") setPasswordFocus("");
  });

  return (
    <div className="Auth_component reset">
      <h3>Reset password</h3>
      <h6>Enter your new password</h6>

      <form action="">
        <div className="input_form">
          <label htmlFor="password">New password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Create password"
            id="password"
          />
          <span className={`input_helper ${passwordFocus}`}>
            Please, enter your new password
          </span>
        </div>
        <div className="button_form">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
