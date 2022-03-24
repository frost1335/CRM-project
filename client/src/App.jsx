import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, RegisterSecond, Forgot, SendInfo } from "./components";
import Register from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";
import Wrapper from "./Wrapper/Wrapper";
import PrivateRoute from "./pages/privateRoute/privateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper>component</Wrapper>} />
      <Route path="*" element={<Wrapper>not found</Wrapper>} />
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
          <Register>
            <RegisterSecond />
          </Register>
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
          <Register>
            <SendInfo />
          </Register>
        }
      />
      <Route
        path="*"
        element={
          <Register>
            <Login />
          </Register>
        }
      />
    </Routes>
  );
};

export default App;
