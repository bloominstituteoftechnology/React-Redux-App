import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { gameOfThronesReducer } from './reducers/index'

import App from './App';

import './index.css';

const store = createStore(gameOfThronesReducer, applyMiddleware(thunk, logger));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
