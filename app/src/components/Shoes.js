import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getShoes } from "../actions";

const Shoes = ({ shoe, isFetching, error, getShoes }) => {
  useEffect(() => {
    getShoes();
  }, []);
  const handleClick = () => {
    getShoes();
  };

  if (error) {
    return <h2> We got an error: {error} </h2>
  }
  if (isFetching) {
    return <h2> Look at these shoes! </h2>
  }

  return (
    <>
      <h2> Which Shoe will you wear today? {shoe}</h2>
      <button onClick={handleClick}>Get new Pair!</button>
      </>
  )
}

const mapStateToProps = state => {
  return{
    shoe: state.shoe,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getShoes })(Shoes);