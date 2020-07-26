import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
