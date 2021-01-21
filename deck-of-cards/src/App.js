import './App.css';
import { connect } from 'react-redux'
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // const [deck_id, setDeck_id] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res => {
          console.log('api res.data: ', res);
          // setDeck_id(res.data.deck_id);
          // console.log(deck_id)
    },[]));
  };

  return (
    <div className="App">
      DISPLAYING 2 DOM
      <button onClick={handleClick}>GET STUFF</button>
    </div>
  );
}

export default App;
// export default connect(mapStateToProps)(App);