import React from 'react';
import './App.css';
import SongLyrics from './components/lyrics'

function App(props) {
return (
  <div className="App">
    <h1>The Lyrics for Any Song!</h1>
    <SongLyrics></SongLyrics>
  </div>
);
}

export default App;
