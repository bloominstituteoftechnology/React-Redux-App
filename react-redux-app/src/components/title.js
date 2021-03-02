import React, { useState } from "react";
import { connect } from "react-redux";
import { searchValue } from "../actions";

const Title = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChanges = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <h1>Operation: Yum Yum Drop</h1>
      <div>
        {" "}
        <input
          name="searchBar"
          type="text"
          placeholder="Input any value"
          style={{
            width: "20rem",
            alignSelf: "center",
            backgroundColor: "#444",
            color: "lightblue",
            textAlign: "center",
            fontSize: "1.25rem",
            margin: "3rem",
          }}
          value={searchValue}
          onChange={handleChanges}
        />
        <button onClick={() => {
            props.searchValue(searchValue)
        }}>Click</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps =  {
    searchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
