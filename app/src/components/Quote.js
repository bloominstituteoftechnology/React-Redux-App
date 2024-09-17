import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";

const Quote = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getQuote();
  }, [getQuote]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Kanye says: {quote}</h2>
      <button onClick={getQuote}>Generate new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quote);
