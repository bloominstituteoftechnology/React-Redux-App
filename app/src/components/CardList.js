import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";


const CardList = (props) => {
  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.data.map(pokemon => 
        <div className="card" key={pokemon.id}>
          <div className="row">
            <div className="column">
              <img src={pokemon.imageUrl} alt="Pokemon Card"></img>
            </div>
          <div className="column">
            <div >
              <h3>{pokemon.name}</h3>
                <p>Number: {pokemon.number}</p>
                <p>Rarity: {pokemon.rarity}</p>
                <p>Type: {pokemon.subtype}</p>
            </div>
          </div>
        </div>

        </div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(CardList);