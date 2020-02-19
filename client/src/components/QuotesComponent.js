import React from "react";
import SingleQuote from "./SingleQuote";

const QuotesComponent = props => {
  console.log(props);

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <div>
      <div>
        <SingleQuote />
      </div>
      <button onClick={handleGetData}>hit me </button>
    </div>
  );
};

export default QuotesComponent;
