import React from 'react';

import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header';



const App = props => {
  console.log('from App', props)

  if (props.isFetching) {
    return <h2 className='App-btn'>**Fetching Dog Pictures**</h2>;
  }
  return (
    <div className="App">
      <Header />
      <div className='dogs'>
        {props.dogs.map((dog, index) => {
          return <img className='dogs-img' key={index} src={dog} alt='' />
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
  {}
)(App);
