import React from 'react';

import './App.css';
import NavBar from './components/NavBar'; 
import TriviaHolder from './components/TriviaHolder'; 


function App() {
  return (
    <div className="App">
        <NavBar /> 
        <TriviaHolder /> 
    </div>
  );
}

export default App;
