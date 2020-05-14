import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";

const Pegnet = props => {
  useEffect(() => {
    props.fetchData();
  }, [props, props.fetchData]);
  return (
    <main>
      <h1>Pegnet</h1>
      {props.isFetching && <h3>Fetching Data...</h3>}
      {props.market_data && (
        <div>
          <h3>{props.market_data.ath.bnb}</h3>
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
    error: state.peg.error
  };
};

export default connect(mapStateToProps, { fetchData })(Pegnet);
