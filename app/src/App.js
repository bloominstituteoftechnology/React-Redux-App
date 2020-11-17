import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./reducers";

const store  = createStore(reducer, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div>
      Is this working?
    </div>
    </Provider>
  );
}

export default App;
