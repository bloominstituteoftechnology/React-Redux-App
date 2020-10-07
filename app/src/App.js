import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect } from "react-redux";

import CharList from './components/CharList'
import {fetchChars} from './actions/action'

function App() {
  return (
    <div>
      <CharList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    char: state.char, // dogs when have the data
    error: state.error, // error when mispell something
    fetchingChars: state.fetchingChars // pending state
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
