import React from 'react';
import ReactDOM from 'react-dom';

// joiners // 
import { Provider } from 'react-redux'; 

// redux // 
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 


import './index.css';
import App from './App';
import { triviaReducer } from './reducers/triviaReducer';

const store = createStore(triviaReducer, applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

