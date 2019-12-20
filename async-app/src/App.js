import React from 'react';
import Header from './components/header';
import Questions from './components/questions';
import Player from './components/player';
import {connect} from 'react-redux';
import{getData,checkAwnser} from './actions';

import './App.css';

function App(props) {
  return (
    <div className="App">
      {console.log(`State: ${props}`)}
      <Header state={props}/>
      <Player state={props.user} isfetching={props.data.isfetching}/>
      <Questions state={props} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: {
      questions: state.data.questions,
      isFetching: state.data.isFetching,
      error: state.data.error
    },
    user: {
      right: state.user.right,
      wrong: state.user.wrong
    }
  };
};

export default connect(
  mapStateToProps,
  {getData,checkAwnser}
  )(App);
