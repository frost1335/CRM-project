import React from "react";
import "../authComponent.scss";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SendInfo = () => {
  return (
    <div className="Auth_component send_info">
      <h3>Thank You For Getting In Touch !</h3>
      <h6>We will check the information and contact you again</h6>

      <div className="contact">
        <div className="text">Contact with us:</div>
        <div className="icons">
          <Link to={"/"} className="icon">
            <BsInstagram />
          </Link>
          <Link to={"/"} className="icon">
            <FaTelegramPlane />
          </Link>
          <Link to={"/"} className="icon">
            <FaFacebookF />
          </Link>
          <Link to={"/"} className="icon">
            <BsYoutube />
          </Link>
          <Link to={"/"} className="icon">
            <BsTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendInfo;
