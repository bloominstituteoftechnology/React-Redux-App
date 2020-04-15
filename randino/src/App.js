import React from 'react';
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import './App.css';

function App() {
  return (
    <div className="App">
      Randino
    </div>
  );
}

export default App;
