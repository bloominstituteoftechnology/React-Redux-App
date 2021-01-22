import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LyricsForm from './components/LyricsForm';

function App() {
  const [lyrics, setLyrics] = useState('');
  useEffect(() => {
    axios
      .get('https://api.lyrics.ovh/v1/Michael-Jackson/Thriller')
      .then((resp) => {
        console.log(resp);
        setLyrics(resp.data.lyrics);
      });
  }, []);
  return (
    <div className='App'>
      <LyricsForm />
      <p>{lyrics}</p>
    </div>
  );
}
export default App;
// Site that generates lyrics for what a user searches
// Form that takes in artist and song title - click button that makes API request
// On success, set form state to "permanent" state
// On failure, print error message to screen and lyrics to goofy song
