import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Card from './Card';

const List = props => {
  return (
    <>
      <h1>I love dog </h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
        ) : (
          'See Dogs'
        )}
      </button>
      {props.dogs &&
        props.dogs.map(dog => <Card key={dog.url} doglist={dog} />)}
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
)(List);
