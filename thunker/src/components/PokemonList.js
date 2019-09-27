import React, {useEffect} from "react"
import {connect} from "react-redux"

import Pokemon from "./Pokemon"
import {fetchPokemon} from "../actions/actions"

const PokemonList = (props) => {
    useEffect(() => {
        props.fetchPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fetchPokemon])
    
    console.log(props.pokemon)

    return (
        <div style={{display: "flex", flexDirection: "row", width: 400}}>
            {props.pokemon.map(pokemon => {
                return <Pokemon pokemon={pokemon} url={pokemon.url}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {fetchPokemon})(PokemonList)