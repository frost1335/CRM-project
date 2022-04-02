import React, { useState } from "react";
import "./Navbar.scss";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import AdminProfile from "../AdminProfile/AdminProfile";
import Notification from "../Notification/Notification";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar_right">
        <Search />
      </div>
      <div className="navbar_left">
        <Notification />
        <AdminProfile  />
      </div>
    </div>
  );
};

export default Navbar;
