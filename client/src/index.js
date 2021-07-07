import React from "react";
import ReactDOM from "react-dom";
//import redux store and middleware
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//
//import state and place it to the store
import { reducer } from "./reducers/";
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
