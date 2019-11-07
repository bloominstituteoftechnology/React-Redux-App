import React from "react";
import "./App.css";
import JokeList from "./components/JokeList";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/chucknorris_logo_coloured_small@2x.png" />
        <JokeList />
      </header>
    </div>
  );
}

export default App;
