import React from "react";
import "./App.css";
import HeroList from "./components/HeroList";

function App() {
  return (
    <div className="App">
      <h1 className="header"> Welcome to Dota 2</h1>

      <HeroList />
    </div>
  );
}

export default App;
