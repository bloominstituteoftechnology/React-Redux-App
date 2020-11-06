import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { quoteReducer } from './reducers/reducer'

import App from './App';

import './index.css';

const store = createStore(quoteReducer, applyMiddleware(thunk, logger));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
