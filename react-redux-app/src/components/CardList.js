import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const CardList = (props) => {
  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.data.map(pokemon => <div><img src={pokemon.imageUrl}></img></div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(CardList);