import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import axios from 'axios'
import './App.css';
import { getFirstImageURL } from 'first-image-search-load';
import {ranDino} from './dinoRandomizer'
function App() {
  
  let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${ranDino}`;
  let proxyurl = "https://cors-anywhere.herokuapp.com/";
  useEffect(() => {
    axios.get(proxyurl + url)
        .then(res => {
            const pageID = Object.keys(res.data.query.pages)
            let pageIDString = pageID.toString()
            console.log(res.data.query.pages[pageIDString].extract)
        })
  })



  return (
    <div className="App">
      Randino
    </div>
  );
}

export default App;
