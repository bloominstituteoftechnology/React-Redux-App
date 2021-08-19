import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PokemonList from "./components/PokemonList";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PokemonList />
      </Router>
    </div>
  );
}

export default App;
