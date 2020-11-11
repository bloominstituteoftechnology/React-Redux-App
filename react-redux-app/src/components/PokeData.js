import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";
import Loading from "./Loading";

function PokeList(props) {
  console.log("PokeList", props);
  return (
    <>
    <h1>PokeData</h1>
      <button onClick={props.fetchPokemon}>Get Data</button>
  {props.isFetching && <div><Loading/></div>}
      {props.error && <div>{props.error.message}</div>}
      <div>
        {props.pokemon.map(p => (
          
          <p className="pokemon" key={p.name}>
            {p.name}
          </p>
          
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return{
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching 
  }
};

export default connect( 
  mapStateToProps, {fetchPokemon}
)(PokeList);
