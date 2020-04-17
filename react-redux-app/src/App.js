import React from "react";
import "./App.css";

import Activity from "./components/Activity";

function App() {
  return (
    <div className="m-container">
      <h1 className="m-title">Crypto Currency Price Tracker</h1>

      <Activity />
    </div>
  );
}

export default App;
