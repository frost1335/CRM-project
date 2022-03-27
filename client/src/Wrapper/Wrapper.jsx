import React, { useEffect, useState } from "react";
import "./Wrapper.scss";

import { Navbar, Sidebar } from "../components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, [navigate]);

  async function tokenConfirm() {
    try {
      const data = await axios.get("/api/private/");

      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  tokenConfirm()
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="Wrapper">
      <div className={`Wrapper_left ${sidebar ? " " : " close"}`}>
        <div
          className={`sidebar_close ${sidebar ? " " : " close"}`}
          onClick={toggleSidebar}
        >
          {sidebar ? <FiChevronLeft /> : <FiChevronRight />}
        </div>
        <Sidebar toggle={sidebar} />
      </div>
      <div className={`Wrapper_right ${sidebar ? " " : " close"}`}>
        <Navbar />
        <div className="wrapper-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
