import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../actions';
import Price from './Price';
import MarketCap from './MarketCap';
import Form from './Form';

const Prices = ({ getPrice, getMarketCap, prices, isFetching, error }) => {

  useEffect(() => {
    //run action creator
    getPrice()
  }, [getPrice])

  if (isFetching) {
    return <h2>Fetching Prices...</h2>
  }
  let sliced = prices.slice(0, 50)
  return (
    <div className="prices-container">
      {/* <Form /> */}
      {sliced.map(price => (
        <Price price={price} key={price.id} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    prices: state.prices,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getPrice })(Prices);