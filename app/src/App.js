import React from 'react';
import './App.css';
//import { connect } from 'react-redux';
import NewsList from './components/NewsList'

function App() {
  return (
    <div className="App">
      <h1 className="App-heading">Wall Street Journal News</h1>
      <NewsList />
    </div>
  );
}

export default App;
