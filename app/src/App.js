import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PokemonList from "./components/PokemonList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <PokemonList />
      </Router>
    </div>
  );
}

export default App;
