<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";

import { reducer } from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk, logger));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const store = createStore(reducer, applyMiddleware());
// (thunk, logger)



>>>>>>> 796ddc0eda8adfba8ef29ac64552223190ebe626

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById("root")
=======
  document.getElementById('root')
>>>>>>> 796ddc0eda8adfba8ef29ac64552223190ebe626
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
serviceWorker.unregister();
=======
serviceWorker.unregister();
>>>>>>> 796ddc0eda8adfba8ef29ac64552223190ebe626
