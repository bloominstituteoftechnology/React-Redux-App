import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Weather from './components/weather/Weather';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
