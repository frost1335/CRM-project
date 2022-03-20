import React from "react";
import { Navbar, Sidebar } from "../components";

const Wrapper = (props) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="wrapper-content">{props.children}</div>
    </>
  );
};

export default Wrapper;
