import React from 'react';
import logo from './logo.svg';
import './App.css';
import {newsList} from "../src/components/newsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <newsList/>
      </header>
    </div>
  );
}

export default App;
