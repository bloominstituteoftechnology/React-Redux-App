import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchQuote } from '../store/actions/quoteActions';


const JackDonaghyQuote = props => {
  useEffect(() => {
    props.fetchQuote();
  }, []);

  return (
    <div>
      <h1>Jack Donaghy Wisdom</h1>
      <div>
      <span>🥃</span>
      </div>
      {props.isFetching && (
      <Loader type="Puff" color="#1B9D0B" height={100} width={100} />
      )}
      {props.quote && <h3>"{props.quote}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchQuote}>Get More Jack Donaghy Wisdom!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error
  };
};

export default connect(
  mapStateToProps,
   { fetchQuote }
   )(JackDonaghyQuote);
