import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { appReducer } from './reducers/appReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Character from './components/Character'


import reportWebVitals from './reportWebVitals';

const store = createStore(appReducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <div className="App">
      <Character />
    </div>
  );
}



const rootElement = document.getElementById('root')
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
