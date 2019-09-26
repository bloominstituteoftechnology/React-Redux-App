import React, { useEffect } from 'react';
import { getMarketCap } from '../actions';
import { connect } from 'react-redux';

const MarketCap = ({ getMarketCap, marketCap, isFetching }) => {
  useEffect(() => {
    getMarketCap()
  }, [getMarketCap])
  if (isFetching)
    return <h2>Fetching Market Cap Data...</h2>
  return (
    <div>
      <p>Bitcoin Dominance: {marketCap.bitcoin_dominance_percentage}%</p>
      <p>Market Cap USD: ${marketCap.market_cap_usd}</p>
      <p>Volume 24 hr change: {marketCap.volume_24h_change_24h}%</p>
      <p>Volume 24 USD: ${marketCap.volume_24h_usd}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    marketCap: state.marketCap,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getMarketCap })(MarketCap)