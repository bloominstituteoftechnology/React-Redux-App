import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './Reducers/reducer';
import './App.css';

const store = createStore(rootReducer, applyMiddleWare(thunk));

function App() {
  return (
    <div className = "App">

    </div>
  )
}



export default App;
