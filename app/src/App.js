import React from 'react';

import { connect } from 'react-redux';

import './App.css';
import Searchbar from './components/Searchbar';
import { fetchDogPictures } from './components/actions/actionIndex';


const App = props => {
  console.log('from App', props)

  if (props.isFetching) {
    return <h2 className='App-btn'>**Fetching Dog Pictures**</h2>;
  }
  return (
    <div className="App">
      <Searchbar key={props.dogs} />
      <h1>I LOVE DOGS</h1>
      <button className='App-btn' onClick={props.fetchDogPictures}>Fetch Dog Pictures</button>
      <div className='dogs'>
        {props.dogs.map(dog => {
          return <img className='dogs-img' key={dog.key} src={dog} alt='' />
        }
        )}
      </div>

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
