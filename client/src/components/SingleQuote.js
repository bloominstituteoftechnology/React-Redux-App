import React from "react";
// import Loader from "react-loader-spinner";

const SingleQuote = ({ quote, author }) => {
  return (
    <div style={{ margin: "0 auto", width: "70%" }}>
      <h1 className="text">{quote}</h1>
      <h3>{author}</h3>
    </div>
  );
};

export default SingleQuote;
