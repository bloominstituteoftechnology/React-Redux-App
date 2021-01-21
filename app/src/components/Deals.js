import React, { useEffect } from 'react';
import { getDeals } from '../actions';
import { connect } from 'react-redux';
const Deals = ({ deals, isFetching, error, getDeals }) => {
  useEffect(() => {
    getDeals();
  },  );

  const handleClick = ()=> {
    getDeals();
  };

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Deals</h2>;
  }

  return (
    <>
      <h2>Deal: { deals }</h2>
      <button onClick={handleClick}>Get More Deals!!!</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.deals,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getDeals })(Deals);