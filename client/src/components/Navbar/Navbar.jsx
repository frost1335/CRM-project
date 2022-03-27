import React, { useState } from "react";
import "./Navbar.scss";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Notification from "../Notification/Notification";
import axios from 'axios'

const Navbar = () => {
  const [suitor, setSuitor] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/suitor");

      setSuitor(data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  fetchData()

  return (
    <div className="Navbar">
      <div className="navbar_right">
        <Search />
      </div>
      <div className="navbar_left">
        <Notification />
        <Profile suitor={suitor} />
      </div>
    </div>
  );
};

export default Navbar;
