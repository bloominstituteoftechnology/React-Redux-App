import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import DogCard from './DogCard';

const DogList = props => {
  return (
    <>
      <h1>Dog Displayer</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
        ) : (
          'See Dogs'
        )}
      </button>
      {props.dogs &&
        props.dogs.map(dog => <DogCard key={dog.url} doglist={dog} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dogs: state.dogs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(DogList);

// TASKS
// - get WebcamList connected to the Redux store
// - Bring in the `test` property from state
// - if done correctly, you should see "It's working" dipslayed in the app
// GOOD LUCK 😃
