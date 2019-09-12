import React from 'react';
import logo from './logo.svg';
import './App.css';

import AdviceList from "./components/AdviceList.js";

function App() {
  return (
    
    <div className="App">

      <div className = "todo-main-div">

        <div className = "header-div">
          <h1>Advice Generator</h1>
        </div>

        <AdviceList />        

      </div>

  </div>

  );
}

export default App;


