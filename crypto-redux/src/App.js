import React from 'react';
import './App.css';
import Prices from './components/Prices';
import MarketCap from './components/MarketCap';


function App() {
  return (
    <div className="App">
      <h1>Cryptocurrency Data</h1>
      <MarketCap />
      <Prices />
    </div>
  );
}

export default App
