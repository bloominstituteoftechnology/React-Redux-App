import React from 'react';

import { connect } from 'react-redux';

import './App.css';
import { fetchDogPictures } from './components/actions/actionIndex';

const App = props => {
  console.log('from App', props)

  if (props.isFetching) {
    return <div style='textAlign: center'>**Fetching Dog Pictures**</div>;
  }
  return (
    <div className="App">
      <h1>I LOVE DOGS</h1>
      <button onClick={props.fetchDogPictures}>Fetch Dog Pictures</button>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    dogs: state.dogs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchDogPictures }
)(App);
