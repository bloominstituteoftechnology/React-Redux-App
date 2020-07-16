import React, { useEffect, useState } from "react";
import "./Coin.css";
import { fetchCoinsSpecific } from "../actions/actions";
import { connect } from "react-redux";

const upArrow = "▲";
const downArrow = "▼";

const Coin = (props) => {
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    setArrow(
      document.getElementById(props.coin.rank).classList.contains("hidden")
    );
  }, [arrow]);

  const toggleHidden = (id) => {
    const divToToggle = document.getElementById(id);

    if (divToToggle.classList.contains("hidden")) {
      const others = document.querySelectorAll(".details");
      others.forEach((other) => {
        other.classList.add("hidden");
      });

      divToToggle.classList.remove("hidden");
      setArrow(false);
    } else {
      divToToggle.classList.add("hidden");
      setArrow(true);
    }
  };

  return (
    <div className="top-container">
      <div
        onClick={() => {
          toggleHidden(props.coin.rank);
          props.fetchCoinsSpecific(props.coins[props.coin.rank - 1].id);
        }}
        className="coin-main-container"
      >
        <h1 className="coin-header-name">{props.coin.name}</h1>
        <h3 className="coin-header-symbol">{props.coin.symbol}</h3>
        <div className="coin-header-rank">Rank: {props.coin.rank}</div>
        <div>{arrow ? downArrow : upArrow}</div>
      </div>
      <div id={props.coin.rank} className="details hidden">
        {props.isFetchingDetails && <p>Loading...</p>}
        {!props.isFetchingDetails && props.coinsDetails && (
          <p>Price: ${JSON.stringify(props.coinsDetails.quotes.USD.price)}</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    isFetchingDetails: state.isFetchingDetails,
    coinsDetails: state.coinsDetails,
    errorDetails: state.errorDetails,
  };
};

export default connect(mapStateToProps, { fetchCoinsSpecific })(Coin);
