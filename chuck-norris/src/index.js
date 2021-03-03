import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reducer } from './reducer'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// Creating store 

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


