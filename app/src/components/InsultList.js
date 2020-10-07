import React from 'react';
import { connect } from 'react-redux';
import { getInsult } from '../actions/index';

const InsultList = props => {
  const fetchInsult = e => {
    e.preventDefault();
    props.getInsult();
  };

  return (
    <>
      <h2>Wicked Insults!</h2>
      {props.isFetching && <p>Fetching your Insult</p>}
      <div>
        {props.insult.map(insult => (
          <h4 key={insult.url}>{insult.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchInsult}>Fetch Insult!</button>
    </>
  );
};

const mapStateToProps = state => ({
  insult: state.insult,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getInsult }
)(InsultList);
