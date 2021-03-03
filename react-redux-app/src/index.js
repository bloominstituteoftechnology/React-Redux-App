import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//1. install redux and react-redux
//2. import wrapper and store
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import {appReducer} from './reducers'
import thunk from 'redux-thunk';


//3. Create store passing in rootReducer
const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap app in Provider passing in store as props */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);



