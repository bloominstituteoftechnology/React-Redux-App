import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducers';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


