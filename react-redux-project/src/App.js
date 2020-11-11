import React from 'react';
import './styles.css';
import PlayerCard from './components/PlayerCard';


function App() {
  return (
    <div className="App">
      <div className="bg">
        <h1>NBA PLAYER CARDS</h1>
        <a href="#player">View Players</a>
      </div>
      <div id="player">
        <PlayerCard />
      </div>
    </div>
  );
}

export default App;
