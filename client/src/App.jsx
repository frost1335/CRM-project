import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, RegisterSecond, Forgot, SendInfo, Reset } from "./components";
import { RegisterPage, LoginPage, PageNotFound } from "./pages";
import Wrapper from "./Wrapper/Wrapper";

import { useDispatch } from "react-redux";
import { registerHandler } from "./actions/register";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( registerHandler );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Wrapper>component</Wrapper>} />
      <Route
        path="*"
        element={
          <Wrapper>
            <PageNotFound />
          </Wrapper>
        }
      />
      <Route
        path="login"
        element={
          <LoginPage>
            <Login />
          </LoginPage>
        }
      />
      <Route
        path="register"
        element={
          <RegisterPage>
            <RegisterSecond />
          </RegisterPage>
        }
      />
      <Route
        path="forgot"
        element={
          <LoginPage>
            <Forgot />
          </LoginPage>
        }
      />
      <Route
        path="reset"
        element={
          <LoginPage>
            <Reset />
          </LoginPage>
        }
      />
      <Route
        path="wait"
        element={
          <RegisterPage>
            <SendInfo />
          </RegisterPage>
        }
      />
      <Route
        path="*"
        element={
          <RegisterPage>
            <Login />
          </RegisterPage>
        }
      />
    </Routes>
  );
};

export default App;
