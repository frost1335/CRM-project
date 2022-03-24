import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoRegister } from "../../images";
import { login } from "../../images";

const Login = (props) => {
  const { pathname } = useLocation();

  return (
    <div className="Auth login">
      <div className="auth_nav">
        <div className="nav_logo">
          <img src={logoRegister} alt="logo" />
        </div>
        <div className="nav_button">
          <Link to={"/register"} className="nav_link">
            Sign up
          </Link>
        </div>
      </div>
      <div className="auth_content">
        <div className="content_left">
          <h2>Connect your team with WorkFly</h2>
          {pathname.replace("/", "") === "login" ? (
            <p>
              Have no account?{" "}
              <Link to={"/register"} className="left_link">
                Registration
              </Link>
            </p>
          ) : null}

          <div className="left_img">
            <img src={login} alt="register-img" />
          </div>
        </div>
        <div className="content_right">
          <div className="register_component">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
