import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard'

const PokemonList = (props) => {

    return (
        <div>
            <h2>My Pokemon List</h2>
            {props.isLoading ? <p>Loading Pokemon List...</p> : null}
            {props.error ? <p style={{color:"red"}}>{props.error}</p> : null}
            {props.pokemonData.map(pokemon => {
                <PokemonCard />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        pokemonData: state.pokemonData,
        error: state.error
    }
}

export default connect(mapStateToProps, {} )(PokemonList);