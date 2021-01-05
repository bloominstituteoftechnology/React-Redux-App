import React from "react";
import Pegnet from "./components/Pegnet";

import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
    <h1>Coin Gecko Crypto Data</h1>
      <Pegnet />
    </div>
  );
}

export default App;
