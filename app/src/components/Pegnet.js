import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";


const Pegnet = props => {
  useEffect(() => {
    props.fetchData('bitcoin');

  }, []);

  return (

    <main className="peg-heading">
      {props.isFetching && <h3>Fetching Data...</h3>}
      {props.info && (
        <div>
        <header className='header-peg'>
        <h1>{props.info.name}</h1><img src={props.info.image.small}/>
        </header>
          <h2>Market Cap Rank: {props.info.market_cap_rank}</h2>

        </div>
      )}
      {props.market_data && props.info && (
        <div>
          <h3>BTC:(ath) {props.market_data.ath.btc}</h3>
          <h3>ETH:(ath) {props.market_data.ath.eth}</h3>
          <h5>Last Updated Timestamp: {props.info.last_updated}</h5>
        </div>
      )}

    </main>

  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.peg.isFetching,
    peg: state.peg.peg,
    market_data: state.peg.market_data,
    info: state.peg.info,
    error: state.peg.error
  };
};

export default connect(mapStateToProps, { fetchData })(Pegnet);
