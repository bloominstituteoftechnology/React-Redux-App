import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import { reducer } from './reducers/Reducer';
import App from './App';

const store = createStore(reducer, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
