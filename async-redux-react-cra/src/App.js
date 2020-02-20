import React from 'react';

import './App.css';
import Houses from './components/Houses';
import Housesmap from './components/Housesmap'
import armorImg from './images/armor.jpg'


function App() {
  return (
    <div className="App"  >
      
        <Houses />
        <Housesmap/>
    </div>
  );
}

export default App;
