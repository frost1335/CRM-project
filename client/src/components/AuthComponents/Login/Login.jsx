import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../authComponent.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [emailFocus, setEmailFocus] = useState("");
  const [passwordFocus, setPasswordFocus] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "api/auth/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      navigate("/");
    } catch (error) {
      setError(e.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

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

      <form onSubmit={loginHandler}>
        <div className="input_form">
          <label htmlFor="email">E-mail or phone number</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="user@email.com"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
        Forgot your password?{" "}
        <Link to={"/reset"} className="form_link">
          Reset
        </Link>
      </p>
    </div>
  );
};

export default Login;
