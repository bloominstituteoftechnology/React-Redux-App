import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";


import { animeReducer as reducer } from "./reducers/animeReducer";
import AnimeList from "./components/AnimeList";
import FetchButton from "./components/FetchButton";



const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>TOP ANIMES OF 2020</h1>
        <FetchButton />
        <AnimeList />
      </div>
    </Provider>
  );
}

export default App;




