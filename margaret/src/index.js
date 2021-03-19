import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import starTrekReducer from './reducer/starTrekReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  starTrekReducer,
  applyMiddleware(thunk, logger)
);


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
