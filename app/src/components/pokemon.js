import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import PokemonCard from "./pokemon-card";

import { fetchPokemon } from "../actions";

const Pokemon = props => {
    console.log("props line 8", props);

    const [searchParams, setSearchParams] = useState("default");
    const [text, setText] = useState("");

    const handleClick = e => {
        setSearchParams(e.target.value);
    };

    const handleChanges = e => {
        setText(e.target.value);
    };

    return (
        <>
            <div className="search-options">
                <div className="search">
                    <input
                        type="text"
                        name="name"
                        value={text}
                        onChange={handleChanges}
                        placeholder="Search Pokemon..."
                    />
                    <button onClick={() => props.fetchPokemon(text.toLowerCase())}>
                        Search
          </button>
                </div>
                <select onClick={handleClick}>
                    <option value="default" selected disabled hidden>
                        -Select Variant-
          </option>
                    <option value="default">Default</option>
                    <option value="shiny">Shiny</option>
                </select>
            </div>
            {!props.pokemon && !props.isLoading && (
                <h3>There is nothing to display</h3>
            )}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
            {props.pokemon && !props.isLoading && searchParams === "default" && (
                <PokemonCard
                    pokemon={props.pokemon}
                    sprite={props.pokemon.sprites.front_default}
                />
            )}
            {props.pokemon && !props.isLoading && searchParams === "shiny" && (
                <PokemonCard
                    pokemon={props.pokemon}
                    sprite={props.pokemon.sprites.front_shiny}
                />
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pokemon: state.pokemon,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);