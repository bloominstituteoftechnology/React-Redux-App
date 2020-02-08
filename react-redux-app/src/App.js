import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { pokemonReducer as reducer } from "./reducers/reducer";
import Card from "./components/Card";
import CardList from "./components/CardList";

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
    return (
      <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <h1>Pokemon</h1>
      <CardList />
      <Card />
      </header>
    </div>
    </Provider>
  );
}

export default App;
