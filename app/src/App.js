import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./reducers"
import Title from "./components/Title"


const store  = createStore(rootReducer, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div>
      <Title/>
    </div>
    </Provider>
  );
}

export default App;
