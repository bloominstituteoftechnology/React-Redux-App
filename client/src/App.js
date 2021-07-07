import React from "react";
import "./App.css";
//redux stuff
import { connect } from "react-redux";
import { getData } from "./actions";
//
import QuotesComponent from "./components/QuotesComponent";

const App = ({ quotes, loading, error }) => {
  return (
    <div className="App">
      <div className="App-div">
        <QuotesComponent quotes={quotes} error={error} loading={loading} />
      </div>
    </div>
  );
};

const MSTP = state => {
  // console.log(state);
  return {
    quotes: state.quotes,
    loading: state.loading,
    error: state.error
  };
};

export default connect(MSTP, { getData })(App);
