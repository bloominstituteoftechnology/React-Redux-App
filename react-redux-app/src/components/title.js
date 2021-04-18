import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchValue, getRecipe } from "../actions";

const Title = (props) => {
  const [searchValues, setSearchValues] = useState("");

  const handleChanges = (e) => {
    console.log("1. e.target.value from handleChanges", e.target.value);
    setSearchValues(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.searchValue(searchValues);
    props.getRecipe(searchValues);
    console.log(props.getRecipe(searchValues));
    console.log("4. search value from handle click", searchValues);
  };

  useEffect(() => {
    props.getRecipe(props.searchValue);
  }, [props]);

  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <div className="d-flex bg-light header flex-column justify-content-center">
        <h1 style={{ fontSize: "7vh" }}>Grubspace</h1>
        <h4>Find your next favorite dish today!</h4>
        <h5 style={{color: 'white'}}>Choose from over 5000 delicious recipes</h5>
      </div>
      <form onSubmit={handleClick}>
        <div className=''d-flex justify-content-center flex-row flex-wrap>
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
              margin: "3rem 0",
            }}
            value={searchValues}
            onChange={handleChanges}
          />
          <button
            type="submit"
            onClick={() => console.log("2. button clicked")}
          >
            Click
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  getRecipe(state.searchValue);
  console.log("state mapped from title", state);
  return {
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = {
  searchValue,
  getRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
