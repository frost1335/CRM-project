import React from "react";
import "./Input.scss";

const Input = (props) => {
  const id = `input-${Math.random()}`;

  return (
    <div className="Input">
      <label htmlFor={id}>E-mail or phone number</label>
      <div className="input_field">
        <input
          type="email"
          autoComplete="off"
          placeholder="user@email.com"
          id={id}
        />
      </div>
      <span className="input_helper">Please, enter your work e-mail</span>
    </div>
  );
};

export default Input;
