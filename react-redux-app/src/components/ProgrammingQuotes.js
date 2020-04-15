import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import "./ProgrammingQuotes.css"

import { fetchQuote } from '../store/actions/quoteActions';

const ProgrammingQuotes = props => {
  useEffect(() => {
    // call an action creator
    props.fetchQuote();
    console.log(props.fetchQuote)
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div className="container">
      <h1>Programming Quotes 🎙</h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.quote &&<div className="text">
                      <h3>"{props.quote}"</h3>
                      <br/>
                      <h4>{props.author}</h4>
                     </div>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchQuote}>Fetch a new quote</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    quote: state.quotes.quote,
    isFetching: state.quotes.isFetching,
    error: state.quotes.error,
    author:state.quotes.author
  };
};

export default connect(
  mapStateToProps,
  { fetchQuote }
)(ProgrammingQuotes);
