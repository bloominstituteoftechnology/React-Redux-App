import React from 'react';
import LyricsForm from './components/LyricsForm';
import Lyrics from './components/Lyrics';

function App() {
  return (
    <div className='App'>
      <LyricsForm />
      <Lyrics />
    </div>
  );
}
export default App;
// Site that generates lyrics for what a user searches
// Form that takes in artist and song title - click button that makes API request
// On success, set form state to "permanent" state
// On failure, print error message to screen and lyrics to goofy song
