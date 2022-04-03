import React, { useEffect, useState } from "react";
import "./Wrapper.scss";

import { Navbar, Sidebar } from "../components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = (props) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(true);
  const [privateData, setPrivateData] = useState("");
  const [error, setError] = useState("");

  const toggleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);

        setPrivateData(data.data);
      } catch (error) {
        navigate("login");
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, [navigate]);

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
