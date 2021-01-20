import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../Actions/index";
import Characters from "./Characters";
const GrabCharacters = (props) => {
  const onClick = () => {
    props.fetchCharacters();
  };

  return (
    <div>
      <h3>Press the button to fetch a list of Rick n Morty Characters!</h3>
      <button onClick={onClick}>Get Characters</button>
      {props.characters.map((item, idx) => {
        return <Characters item={item} key={idx} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchCharacters })(GrabCharacters);
