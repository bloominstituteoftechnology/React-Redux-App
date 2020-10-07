import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import { fetchComic } from './actions';

function App(props) {
  const { fetchComic } = props;
  //https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json
  const [url, setUrl] = useState("http://xkcd.com/info.0.json")
  useEffect(() => {
    fetchComic
  })
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default connect(null, { fetchComic })(App);
