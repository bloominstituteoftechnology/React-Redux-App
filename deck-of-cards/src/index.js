import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import { reducer } from './reducers';

// const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
