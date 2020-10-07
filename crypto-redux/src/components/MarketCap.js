import React, { useEffect } from 'react';
import { getMarketCap } from '../actions';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

const MarketCap = ({ getMarketCap, marketCap, isFetching }) => {
  useEffect(() => {
    getMarketCap()
  }, [getMarketCap])
  if (isFetching)
    return <h2>Fetching Market Cap Data...</h2>
  return (
    <div className="market-cap-container">
      <p className="market-data">Bitcoin Dominance: {marketCap.bitcoin_dominance_percentage}%</p>
      <p className="market-data">Market Cap USD: ${marketCap.market_cap_usd}</p>
      <p className="market-data">Volume 24 hr change: {marketCap.volume_24h_change_24h}%</p>
      <p className="market-data">Volume 24 USD: ${marketCap.volume_24h_usd}</p>
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