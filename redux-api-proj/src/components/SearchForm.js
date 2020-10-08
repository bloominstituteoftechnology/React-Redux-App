import React, { useState } from "react";
import { connect } from "react-redux";

const SearchForm = (props) => {
  const [searchTicker, setSearchTicker] = useState("TSLA");

  const onChange = (e) => {
    setSearchTicker(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setUrl(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchTicker}&interval=5min&apikey=ZZERN3GSXZ5E1U0M`
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={searchTicker}
        placeholder="TSLA"
      />
      <button>Search</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    date: state.date,
  };
};

export default connect(mapStateToProps, {})(SearchForm);
