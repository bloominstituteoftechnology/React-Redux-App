import React from 'react';
import './App.css';
import LaunchList from './components/LaunchList';

function App() {
  return (
    <div className="App">
      <h1>SpaceX Telemetry Viewer</h1>
      <LaunchList />
    </div>
  );
}

export default App;
