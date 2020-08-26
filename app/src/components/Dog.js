import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDog } from "../actions/index";

const Dog = ({ getDog, dog, isFetching }) => {
  useEffect(() => {
    getDog();
  }, [getDog]);

  if (isFetching) {
    return <h2>Loading...</h2>
  };

  return (
    <>
      <h2>Dog: {dog}</h2>
      <button onClick={getDog}>Get new dog</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { dog: state.dog };
};

const mapDispatchToProps = { getDog };

export default connect(mapStateToProps, mapDispatchToProps)(Dog);