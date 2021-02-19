import React from 'react';

import Quotes from './components/Quotes';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Donald Trump Quotes</h1>
      <img src='https://bit.ly/3ubmAsT' alt='donald trump talking'/>
      <br/>
      <Quotes />
    </div>
  );
}

export default App;
