import React from 'react';
import './App.scss';

import Headline from './components/Header/Header.js'
import PlayerList from './components/PlayerList/PlayerList.js';

function App() {
  
  return (
    <div className="App">
      <div className='main-body'>
        <Headline />
        <PlayerList />
      </div>
      
    </div>
  );
}

export default App;
