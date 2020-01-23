import React from 'react';
import { connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import styled from 'styled-components';

import Fact from './components/Joke'
import { Reducer } from './reducers/Reducer'

function App() {
  const Div = styled.div `
  display:flex;
  flex-direction:column;
  text-align:center;
  margin-top: 20%;
  margin-left: 2%;
  margin-right: 2%;
  justify-content:center;
  background-color: lightgrey;
`;
  return (
  <div className='AppTwo'>
    <Div className="App">
      <h1> Random Cat Fact </h1>
      <Fact />
    </Div>
  </div>
  );
}

export const store = createStore(Reducer, applyMiddleware(thunk, logger));

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    Fact: state.Fact,
    error: state.error
  }
}
export default connect(mapStateToProps,{})(App);
