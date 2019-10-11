import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFacts } from '../actions';

import Fact from './Fact';

const DogPictures = props => {
  useEffect(() => {
    props.fetchFacts();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Pictures of Chihuahuas...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.dogPictures.map(fact => (
        
        <Fact key={fact._id} fact={fact} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dogPictures: state.dogPictures,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(DogPictures);
