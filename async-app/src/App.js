import React from 'react';
import Header from './components/header';
import Questions from './components/questions';
import {connect} from 'react-redux';
import{getData} from './actions';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header state={props}/>
      <Questions state={props} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {getData}
  )(App);
