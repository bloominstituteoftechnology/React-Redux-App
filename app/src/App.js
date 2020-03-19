import React from 'react';
import './App.css';
//import { connect } from 'react-redux';
import NewsList from './components/NewsList'

function App() {
  return (
    <div className="App">
      <h2>Wall Street Journals</h2>
      <NewsList className="newslist"/>
    </div>
  );
}

export default App;
