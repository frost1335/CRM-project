import React, { useState } from "react";
import "./Wrapper.scss";

import { Navbar, Sidebar } from "../components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Wrapper = (props) => {
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
