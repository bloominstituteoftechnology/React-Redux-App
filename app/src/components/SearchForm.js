import React, { useState } from "react";
import { connect } from "react-redux";

const SearchForm = (props) => {
    const [searchNum, setSearchNum] = useState("");
  
    const handleChanges = (e) => {
      setSearchNum(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.setUrl(
        `https://cors-anywhere.herokuapp.com/http://xkcd.com/${searchNum}/info.0.json`
      );
    };
  
    return (
        <div className = "fullForm">
            <form onSubmit={handleSubmit}>
                <p>Enter a number from 1 to 2369 to search up a comic</p>
                <input type="text" onChange={handleChanges} value={searchNum} />
                <button>Search</button>
            </form>
        </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading
    };
  };
  
  export default connect(mapStateToProps, {})(SearchForm);
  