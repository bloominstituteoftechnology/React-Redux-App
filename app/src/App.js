import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import SearchForm from './components/SearchForm'
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
  const [url, setUrl] = useState("https://cors-anywhere.herokuapp.com/http://xkcd.com/1/info.0.json")
  useEffect(() => {
    fetchComic(url);
  }, [fetchComic, url]);
  return (
    <div className="App">
      {/* <h1>XKCD Comic</h1> */}
      <SearchForm setUrl = {setUrl}/>
      <Comic comicInfo = {props.comic}/>
      <a href = "https://what-if.xkcd.com/" className = "whatIfLink"><p>Check out XKCD's "What if?" comics here!</p></a>
      {/* <div className = "gitHubLink">
        <a href = "https://github.com/fatima-rizvi" ><p>Github: fatima-rizvi</p></a>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comic: state.comic
  };
};

export default connect(mapStateToProps, { fetchComic })(App);
