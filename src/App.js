import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import CoinList from './components/CoinList';

const App =() => {
  return (
    <div className="App">
      <header>
        <h1>TopCrypto</h1>
      </header>
        <CoinList />
    </div>
  );
};

export default connect(null, {})(App);


