import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const Form = (props) => {
  const [searchYear, setSearchYear] = useState("react");

  const changeHandle = (event) => {
    setSearchYear(event.target.value);
  };

  const submitHandle = (event) => {
    console.log(props);
    event.preventDefault();
    props.setUrl(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchYear}`
    );
  };
  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={15}
          width={120}
          timeout={6000} //3 secs
        />
      </>
    );
  };

  return (
    <div>
      <h2>this is the form</h2>
      <form onSubmit={submitHandle}>
        <input
          name="year"
          type="text"
          value={searchYear}
          onChange={changeHandle}
          placeholder="enter year"
        />
        <button>{props.isLoading ? renderLoader() : "get Holiday"}</button>
      </form>
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

export default connect(mapStateToProps, {})(Form);
