import React from 'react';
import { connect } from 'react-redux';

import NmrCoin from './components/NmrCoin';
import './App.css';
import CoinList from './components/CoinList';

const App =() => {
  return (
    <div className="App">
      <header>
        <h1>Top 100 Cryptocurrencies</h1>
      </header>

        {/* <NmrCoin /> */}
        <CoinList />
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log('App.js mSTP is running...', { state });

//   return {

//   }
// };

export default connect(null, {})(App);


