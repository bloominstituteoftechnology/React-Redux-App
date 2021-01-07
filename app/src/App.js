import React from 'react';
import './App.css';
import Quote from './Components/Quotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Async Redux!</h1>
        <Quote />
      </header>
    </div>
  );
}

export default App;
