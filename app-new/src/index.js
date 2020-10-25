import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { appReducer } from './reducer';

let store = createStore(appReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
rootElement);