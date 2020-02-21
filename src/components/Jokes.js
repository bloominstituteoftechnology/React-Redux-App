import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchJoke } from '../store/actions';

const Jokes = props => {
  const getLaughs = e => {
    e.preventDefault();
    props.fetchJoke();
  };

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <>
      <button onClick={getLaughs}>Fetch me some laughs!</button>
      {props.error && <p>{props.error}</p>}
      {props.joke ? (
        <h4>{props.joke}</h4>
      ) : (
        <p>Fetch a joke for some giggles!</p>
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    joke: state.joke
  };
};
export default connect(
  mapStateToProps,
  { fetchJoke }
)(Jokes);
