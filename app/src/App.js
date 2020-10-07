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
    fetchComic(url);
  }, []);
  return (
    <div className="App">
      <h1>Hi</h1>
      <h3>Title: {props.comic.safe_title}</h3>
      <img src = {props.comic.img} alt = {props.comic.alt} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comic: state.comic
  };
};

export default connect(mapStateToProps, { fetchComic })(App);
