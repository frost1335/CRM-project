import React from "react";
import "./Navbar.scss";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Search />
      <Profile/>
    </div>
  );
};

export default Navbar;
