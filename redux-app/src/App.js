import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import RandomQuote from './components/RandomQuote'
import './App.css'

import { appReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(appReducer, applyMiddleware(logger, thunk));

export default function App() {
  return (
    <div className="App">
      <RandomQuote />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
