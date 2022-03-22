import React from "react";
import { Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Wrapper from "./Wrapper/Wrapper";

const isAuthentication = false;

const App = () => {
  return (
    <>
      {!isAuthentication ? (
        <Wrapper>
          <Routes></Routes>
        </Wrapper>
      ) : (
        <Register />
      )}
    </>
  );
};

export default App;
