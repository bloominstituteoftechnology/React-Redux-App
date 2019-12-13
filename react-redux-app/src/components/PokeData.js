import React from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions";

function PokeList(props) {
  console.log("PokeList", props);
  return (
    <>
      <button onClick={() => props.dispatch(fetchPokemon())}>Get Data</button>
      {props.isFetching && <div></div>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.pokemon.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}
          </li>
        ))}
      </ul>
    </>
  );
}

const mapDispatchToProps = state => {
  return{
   pokemon: state.pokemon,
   error: state.error,
   isFetching: state.isFetching 
  }
  
  
};

export default connect( 
  mapDispatchToProps, {fetchPokemon}
  
)(PokeList);
