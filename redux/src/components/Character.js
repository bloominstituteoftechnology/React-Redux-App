import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchCharacter } from "../actions";
import '../App.css';

const Character = props => {
  return (
    <div className= "container">
      <button className="button" onClick={props.fetchCharacter}>Get Character</button>
      {props.character && !props.isLoading}
      {props.isLoading &&
      (
        <Loader
          type="ThreeDots"
          color="#1f6032"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {/* {props.character &&
        !props.isLoading && <h2>{props.character.name}</h2> && (
          <img src={props.character.image} alt={props.character.name} />
        ) && <h2>{props.character.status}</h2>} */}
        {props.character.map(character => {
            return (
                <div>
                    <h2>Name: {character.name}</h2>
                    <img className="characterimg" src={character.img} alt={character.name}/>
                    <h2>Status: {character.status}</h2>
                </div>
            )
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    character: state.character,
    // name: state.character.name,
    // image: state.character.image,
    // status: state.character.status,
    error: state.error
  };
};

export default connect(
    mapStateToProps, 
   { fetchCharacter }
   )(Character);