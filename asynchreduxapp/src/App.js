import React from 'react';
import './App.css';
import BeerButton from './components/BeerButton';
import { createStore, applyMiddleware } from 'redux';
import { beerReducer as reducer} from './reducers/beerReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BeerList from './components.BeerList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
