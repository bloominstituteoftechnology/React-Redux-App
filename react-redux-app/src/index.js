import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import appReducer from './reducer'

const store = createStore(appReducer,applyMiddleware(thunk) )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

