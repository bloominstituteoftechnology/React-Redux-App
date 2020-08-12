import React from 'react';
import ReactDOM from 'react-dom';

// joiners // 
import { Provider } from 'react-redux'; 

// redux // 
import { createStore } from 'redux'; 


import './index.css';
import App from './App';
import { triviaReducer } from './reducers/triviaReducer';

const store = createStore(triviaReducer); 

ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

