import React, { useEffect } from 'react';
import SongForm from './components/SongForm';
import Title from './components/Title';



import './App.css';

function App(props) {

  useEffect(() => {
    props.song();
  }, []);

  
  return (
    <div className="App">
      <h1>Song Lyrics</h1>
        <SongForm />
        <Title title={props.title} />
    </div>
  );
}

export default App;


// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1