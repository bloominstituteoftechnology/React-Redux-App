import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './reducers/index';
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
