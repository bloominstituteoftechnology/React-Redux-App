import axios from "axios"

import React from 'react';
import './App.css';

import PokemonList from "./components/PokemonList"

function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })

  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
