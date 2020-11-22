import React, { useState } from "react";
import { connect } from "react-redux";
import { searchNewCard } from "../store";
function SearchBar(props) {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    props.searchNewCard(search);
  };
  return (
    <form className="form" id="addItemForm" onSubmit={onSearch}>
      <input
        type="text"
        className="input"
        id="addInput"
        placeholder="Search for card..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    isLoading: state.isLoading,
    error: state.error,
    page: state.page,
  };
};

export default connect(mapStateToProps, { searchNewCard })(SearchBar);