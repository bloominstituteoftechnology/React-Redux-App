import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { Myreducer } from './reducer';
import thunk from "redux-thunk";

const ownThunk = (store) => (next) => (action) => {
  if (typeof action === 'object') {
    next(action);
  } else if (typeof action === 'function') {
    action(store.dispatch)
  }
}

const store = createStore(Myreducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
