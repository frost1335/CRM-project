import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import reducers from "./reducers";

import App from "./App";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    {/* // <Provider store={store}> */}
    <App />
    {/* // </Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
