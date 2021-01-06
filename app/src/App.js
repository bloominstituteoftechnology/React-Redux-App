import React from "react";
import "./App.css";
import Card from "./components/card";
import CardList from "./components/cardList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon</h1>

        <Card />
        <br />
        <CardList />
      </header>
    </div>
  );
}

export default App;