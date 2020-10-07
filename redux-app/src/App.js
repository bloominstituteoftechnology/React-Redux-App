import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { animeReducer as reducer } from "./reducers/animeReducer";
import AnimeList from "./components/AnimeList";
import FetchButton from "./components/FetchButton";
import axios from "axios";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>TOP ANIMES OF WINTER 2019</h1>
        <FetchButton />
        <AnimeList />
      </div>
    </Provider>
  );
}

export default App;
