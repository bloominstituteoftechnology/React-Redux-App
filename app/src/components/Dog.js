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
      <img className="dog-img" src={dog} alt="Random Dog"/>
      <button className="random-dog-btn" onClick={getDog}>Get random dog</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { dog: state.dog };
};

const mapDispatchToProps = { getDog };

export default connect(mapStateToProps, mapDispatchToProps)(Dog);