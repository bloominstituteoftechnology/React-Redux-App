import React from "react";
import { connect } from "react-redux";

import { getBook } from "../actions";

const Titles = ({ getBook, book, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getBook}>Find a new book</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a book now :)</h2>;
  } else {
    return (
      <div>
        <h2>Here's our pick: {book}</h2>
        <button onClick={getBook}>Try another one!</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    book: state.book,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getBook }
)(Titles);
