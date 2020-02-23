import React from 'react';
import { connect } from "react-redux";

const QuotesList = props => {
  return (
    <div>
      {props.error ? (
        <div className="error"> {props.error}</div>
      ) : (
        props.quotes.map(quote => <div>{quote.setup}</div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    error: state.error
  };
};
export default connect(mapStateToProps, {})(QuotesList);
