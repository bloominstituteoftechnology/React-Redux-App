import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";
const coinName = ('pegnet', 'bitcoin', 'pegnet')

const Pegnet = props => {
  useEffect(() => {
    props.fetchData(coinName);

  }, []);

  return (
    <main className="peg-heading">
      {props.isFetching && <h3>Fetching Data...</h3>}
      {props.info && (
        <div>
        <h1>{props.info.name}</h1>
          <h2>Market Cap Rank:{props.info.market_cap_rank}</h2>
          <img src={props.info.image.small}/>
        </div>
      )}
      {props.market_data && (
        <div>
          <h3>BTC:{props.market_data.ath.btc}</h3>
          <h3>BNB:{props.market_data.ath.bnb}</h3>
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
