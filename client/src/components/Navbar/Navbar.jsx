import React from "react";
import "./Navbar.scss";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Notification from "../Notification/Notification";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar_right">
        <Search />
      </div>
      <div className="navbar_left">
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
