import React from "react";

const SingleQuote = props => {
  console.log(props);
  return <div>{props.quotes.en}</div>;
};

export default SingleQuote;
