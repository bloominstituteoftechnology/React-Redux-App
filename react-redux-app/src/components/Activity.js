import React from "react";
import { connect } from "react-redux";

import { fetchActivity } from "../actions";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Activity = (props) => {
  console.log(props);
  return (
    <div className="main">
      <h1 className="m-title">Crypto Currency Price Tracker</h1>
      <span className="btn bouncy" id="button" onClick={props.fetchActivity}>
        Check Current Prices
      </span>
      <div className="m-container">
        <table id="table">
          <thead>
            <tr className="hdr">
              <td>Name</td>
              <td colSpan="2">Price</td>
            </tr>
          </thead>
          {props.activity.activity.map((coin) => (
            <tbody key={coin.id}>
              <tr>
                <td>
                  <img
                    alt="coin thumbnail"
                    src={coin.iconUrl}
                    className="posterImage"
                  />
                  <div className="text">
                    {coin.name} | {coin.symbol}
                  </div>
                </td>
                <td>
                  <div className="price">${formatter.format(coin.price)}</div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchActivity })(Activity);
