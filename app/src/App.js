import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Weather from './components/weather/Weather';
import Footer from './components/footer/Footer';
import Background from './components/background/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
