import React, { useState } from "react";
import { connect } from "react-redux";
import { loadDataForLocation } from "../actions";

const SearchForm = (props) => {
  const [searchLocation, setSearchLocation] = useState("remote");

  const handleChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.loadDataForLocation(searchLocation);
  };

  return (
    <div>
      <input value={searchLocation} onChange={handleChange} />
      <button onClick={handleClick}>search</button>
    </div>
  );
};

export default connect(() => null, { loadDataForLocation })(SearchForm);
