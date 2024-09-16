import React from 'react';
import './App.css';

import MonsterForm from "./Components/MonsterForm"
import { createStore, applyMiddleware } from "redux"
import { monsterReducer as reducer } from "./reducers/monsterReducer"
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import MonsterList from "./Components/MonstersList"

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> Pokemon </h1>
          <MonsterForm />
          <MonsterList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
