import React from "react";
import SingleQuote from "./SingleQuote";
//redux stuff
import { connect } from "react-redux";
import { getData } from "../actions";
//

const QuotesComponent = props => {
  console.log(props);

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <div>
      {<SingleQuote quotes={props.quotes} />}
      <button onClick={handleGetData}>hit me </button>
    </div>
  );
};

const MSTP = state => {
  console.log(state);
  return {
    quotes: state.quotes,
    loading: state.loading,
    error: state.error
  };
};

export default connect(MSTP, { getData })(QuotesComponent);
