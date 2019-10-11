import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFacts } from '../actions';

import Fact from './Fact';

const CatFacts = props => {
  useEffect(() => {
    props.fetchFacts();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Cat Facts...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.catFacts.map(fact => (
        
        <Fact key={fact._id} fact={fact} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    catFacts: state.catFacts,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(CatFacts);
