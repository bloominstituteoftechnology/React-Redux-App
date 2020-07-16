import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoins } from "../actions/actions";
import Coin from "./Coin";
import "../App.css";
import "./Coins.css";

const Coins = (props) => {
  useEffect(() => {
    props.fetchCoins();
  }, []);

  return (
    <div className="main-container">
      <div className="title-container">
        <h1>Coins</h1>
      </div>
      {props.isFetching && <p className="loading-text">Loading coins...</p>}
      <div className="coin-container">
        {!props.isFetching &&
          props.coins.length > 0 &&
          props.coins.map((coin) => {
            return <Coin coin={coin} />;
          })}
      </div>
      {!props.isFetching && props.error && (
        <div className="error-text">{JSON.stringify(props.error)}</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    coins: state.coins,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchCoins })(Coins);
