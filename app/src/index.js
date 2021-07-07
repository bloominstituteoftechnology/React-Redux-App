import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { newsListReducer } from "./reducers/newsListReducers";
import thunk from "redux-thunk";

let store = createStore(newsListReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  // Step 2: provide the store
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
