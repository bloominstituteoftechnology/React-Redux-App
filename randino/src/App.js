import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import axios from 'axios'
import './App.css';
import { getFirstImageURL } from 'first-image-search-load';

function App() {

  useEffect(() => {
    axios.get(getFirstImageURL(`computer`))
    .then(res => console.log(res))
  })

  return (
    <div className="App">
      Randino
    </div>
  );
}

export default App;
