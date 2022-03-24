import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  RegisterFirst,
  RegisterSecond,
  Reset,
  SendInfo,
} from "./components";
import Register from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import Wrapper from "./Wrapper/Wrapper";

const isAuthentication = false;

const App = () => {
  return (
    <>
      <Routes>
        {isAuthentication ? (
          <>
            <Route path="/" element={<Wrapper></Wrapper>} />
            <Route path="*" element={<Wrapper></Wrapper>} />
          </>
        ) : (
          <>
            <Route
              path="login"
              element={
                <LoginPage>
                  <Login />
                </LoginPage>
              }
            />
            <Route
              path="signup"
              element={
                <Register>
                  <RegisterFirst />
                </Register>
              }
            />
            <Route
              path="register"
              element={
                <Register>
                  <RegisterSecond />
                </Register>
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
              path="formed"
              element={
                <Register>
                  <SendInfo />
                </Register>
              }
            />
            <Route
              path="*"
              element={
                <Register>
                  <RegisterFirst />
                </Register>
              }
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
