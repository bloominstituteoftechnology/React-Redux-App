import React from 'react';
import './App.css';
import Charts from "./components/Charts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Coin MarketSnap</h1>
      <Charts />
    </div>
  );
}

export default App;
