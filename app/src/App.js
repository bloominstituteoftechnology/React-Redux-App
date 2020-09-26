import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{props.pmData.title}</h1>
      {props.is_loading_data ? (
        <div className="load"> Loading... </div>
      ) : props.error ? (
        <div>{props.error}</div>
      ) : (
        <>
          <p> By {props.pmData.director}</p>
          <p>{props.pmData.description}</p>
          <p>{props.pmData.release_date}</p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pmData: state.pmData,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
