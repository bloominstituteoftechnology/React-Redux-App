import React from 'react';

import TVCard from './components/TVCard'; // imported the TVCard component for rendering within the App component

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: '2rem', margin: '10px 0 10px 0'}}>Random TV Show Generator</h1>
      <TVCard />
    </div>
  );
}

export default App;
