import React from 'react';

import { connect } from 'react-redux';

import './App.css';
import Selectbar from './components/Selectbar';
import { fetchDogPictures } from './components/actions/actionIndex';


const App = props => {
  console.log('from App', props)

  if (props.isFetching) {
    return <h2 className='App-btn'>**Fetching Dog Pictures**</h2>;
  }
  return (
    <div className="App">
      <Selectbar key={props.dogs} />
      <h1>I LOVE DOGS</h1>
      <button className='App-btn' onClick={props.fetchDogPictures}>Fetch Dog Pictures</button>
      {props.dogs.map(dog => {
        return <div key={dog.message}>{dog.message}</div>
      })
      }

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
