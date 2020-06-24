import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers';
import { Provider } from 'react-redux';
import Title from './components';
import Quote from './components';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Quote />
      </header>
    </div>
  );
}

export default App;
