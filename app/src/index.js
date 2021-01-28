import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore , applyMiddleware } from 'redux'
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'


import { gameReducer } from './reducers/index'

import App from './App';


const store = createStore(gameReducer, applyMiddleware ( thunk, logger));

ReactDOM.render( 
  <Provider store={store}>
     <App />
  </Provider>,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
