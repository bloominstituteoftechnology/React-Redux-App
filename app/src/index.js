import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { appReducer } from './reducer';
import thunk from 'redux-thunk'

const rootElement = document.getElementById('root');
const logger = ({getState}) => next => action => {
  console.log("Dispatching action: ", action);
  next(action);
}
const store = createStore(appReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);