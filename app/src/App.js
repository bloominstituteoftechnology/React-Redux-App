import React from 'react';
import Quotes from './components/Quotes';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <div>
    <h1 id='header'>Random Quote Generator</h1>
    <Jumbotron fluid className='main'>
    <Quotes />
    </Jumbotron>
    </div>
  );
}

export default App;
