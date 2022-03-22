import React from "react";
import "./Switch.scss";

const Switch = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Switch;
