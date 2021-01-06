import React from "react";
import CuteDogs from "./components/CuteDogs";
import "./App.css";
import Card from "@material-ui/core/Card";

function App() {
  return (
    <div className="App">
      <Card style={{backgroundColor: '#43e0d9'}}>
        <h1>Dogs World 🐕</h1>
      </Card>
      <CuteDogs />
    </div>
  );
}

export default App;