import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/reducer';
import './App.css';
import HpHouse from './Components/HpHouse';
// import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className = "App">
      <HpHouse />
    </div>
  )
}



export default App;
