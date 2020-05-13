import React from 'react';
import { connect } from 'react-redux';

import Coin from './components/Coin';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <header className="header">
        <Coin />
      </header>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log('App.js mSTP is running...', { state });

//   return {

//   }
// };

export default connect(null, {})(App);


