import React, { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

import { connect } from "react-redux";
import { fetchHolidays } from "./actions";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const App = (props) => {
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react"
  );

  return (
    <div className="App">
      <h1>Annual Country Holidays</h1>
      <h2>{props.error}</h2>
      <Form url={url} setUrl={setUrl} />
      <List url={url} setUrl={setUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchHolidays })(App);
