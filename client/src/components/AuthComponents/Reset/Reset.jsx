import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const [resetFocus, setResetFocus] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  document.addEventListener("focusin", function (e) {
    if (e.target.type === "email") {
      setResetFocus("active");
    } else {
      setResetFocus("");
    }
  });

  document.addEventListener("focusout", function (e) {
    if (e.target.type === "email") setResetFocus("");
  });

  return (
    <div className="Auth_component reset">
      <h3>Forgot password?</h3>
      <h6>Enter your email address for reset password</h6>

      <form action="">
        <div className="input_form">
          <label htmlFor="reset">Your E-mail</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email adress"
            id="reset"
          />
          <span className={`input_helper ${resetFocus}`}>
            Please, enter your e-mail adress
          </span>
        </div>
        <div className="button_form forgot">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Reset;
