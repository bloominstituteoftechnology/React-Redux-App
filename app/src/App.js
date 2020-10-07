import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.css';

function App(props) {
  const { fetchComic } = props;
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default connect(null, { fetchComic })(App);
