import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import appReducer from './Reducers/quoteReducer';


const store = createStore(appReducer, applyMiddleware(logger, thunk));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
document.getElementById('root') 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

