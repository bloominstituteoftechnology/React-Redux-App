import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Comic from './components/Comic'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import { fetchComic } from './actions';

function App(props) {
  const { fetchComic } = props;
  //https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json
  //"http://xkcd.com/info.0.json"
  //highest number: 2369
  // https://xkcd.com/2369/info.0.json
  const [url, setUrl] = useState("https://cors-anywhere.herokuapp.com/http://xkcd.com/250/info.0.json")
  useEffect(() => {
    fetchComic(url);
  }, []);
  return (
    <div className="App">
      <h1>XKCD Comic</h1>
      <Comic comicInfo = {props.comic}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comic: state.comic
  };
};

export default connect(mapStateToProps, { fetchComic })(App);
