import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import axios from 'axios'
import './App.css';
import { getFirstImageURL } from 'first-image-search-load';
import {ranDino} from './dinoRandomizer'
import { reducer } from "./reducers"
import Header from "./components/Header";
import DinoText from "./components/DinoText"
const store = createStore(reducer,  applyMiddleware(thunk))

function App() {
  




  return (
    <Provider store={store}>
      <div>
        <Header />
        <DinoText />
    </div>
    </Provider>
    
  );
}

export default App;
