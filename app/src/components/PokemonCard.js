import React from 'react'
import { connect } from 'react-redux'

const PokemonCard = (props) => {
    return (
        <div>
            <p>Hi</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemonData:state.pokemonData,
    }
}

export default connect(mapStateToProps, {})(PokemonCard)