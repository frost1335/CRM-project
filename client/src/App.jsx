import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, RegisterSecond, Forgot, SendInfo } from "./components";
import { RegisterPage, LoginPage, PageNotFound } from "./pages";
import Wrapper from "./Wrapper/Wrapper";

const App = () => {
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
        path="reset"
        element={
          <LoginPage>
            <Forgot />
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
