import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { getMeal } from '../actions';

const Meals = (props) => {
  const { meal, isFetching, error} = props;

  const handleClick = ()=> {
    props.getMeal();
  }

  useEffect(() => {
    props.getMeal();
  }, [meal]);

  if (error) {
    return <h2>Problem needs to be resolved: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Lets Grab That Dough!</h2>;
  }

  return (
    <>
      <h2>BONE APPLE TEETH: </h2>
      <div>{meal}</div>
      <button onClick={handleClick}>Get new meal</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    meal: state.meal,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getMeal })(Meals);