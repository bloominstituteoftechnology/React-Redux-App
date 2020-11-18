import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  });
  return <div className="App"></div>;
};

export default App;
