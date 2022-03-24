import { Route } from "react-router-dom";
import LoginPage from "../Auth/Login";

const PrivateRoute = ({ element: Component, ...rest }) => {
  console.log(Component);
  return (
    <Route
      {...rest}
      element={
        localStorage.getItem("authToken") ? <Component /> : <LoginPage />
      }
    />
  );
};

export default PrivateRoute;
