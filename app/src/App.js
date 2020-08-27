import React from 'react';
import './App.css';
import {NewsList} from "./components/NewsList";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewsList/>
      </header>
    </div>
  );
}

export default App;
