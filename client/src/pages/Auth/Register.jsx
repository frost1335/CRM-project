import React from "react";
import { Link } from "react-router-dom";
import {
  RegisterFirst,
  RegisterSecond,
  Login,
  Reset,
  SendInfo,
} from "../../components";
import { logoRegister, registerImg } from "../../images";
import "./Authentication.scss";

const Register = () => {
  return (
    <div className="Auth">
      <div className="auth_nav">
        <div className="nav_logo">
          <img src={logoRegister} alt="logo" />
        </div>
        <div className="nav_button">
          <Link to={"/login"} className="nav_link">
            Sign in
          </Link>
        </div>
      </div>
      <div className="auth_content">
        <div className="content_left">
          <h2>Connect your team with WorkFly</h2>
          <h6>
            <span>1</span>/3 - Registration
          </h6>
          <p>
            Already have an accout?{" "}
            <Link to={"/login"} className="left_link">
              Sign in
            </Link>
          </p>
          <div className="left_img">
            <img src={registerImg} alt="register-img" />
          </div>
        </div>
        <div className="content_right">
          <div className="register_component">
            <SendInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
