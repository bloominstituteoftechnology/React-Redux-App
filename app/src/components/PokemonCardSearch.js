import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPokemon } from '../actions';

const PokemonCardSearch = props => {

    const [pokemon, setPokemon] = useState("");

    const handleChanges = (e) => {
      setPokemon(e.target.value);
    };

    return (
      <div className="search">
        <form onSubmit={e => {
          e.preventDefault();
          props.searchPokemon(pokemon)
        }
      }>
          <input
            name="pokemon"
            type="text"
            placeholder="Choose a pokemon..."
            onChange={handleChanges}
            value={pokemon}
          />
          <button>Search</button>
        </form>
      </div>
    );
}

export default connect(null, { searchPokemon })(PokemonCardSearch);