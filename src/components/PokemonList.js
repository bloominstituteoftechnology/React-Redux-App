import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { fetchPokemon, displayPokemon } from '../store/actions'

import styled from 'styled-components'


const StyledHeader = styled.div`
h2 {
    padding: 2rem 0;
    margin: 1rem 0;
}
`

const StyledCardContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
`

const PokemonList = (props) => {

    return (
        <div>
            <Route path='/'>
                <StyledCardContainer>
                {props.savedPokemon.map(pokemon => {
                    return <PokemonCard key={pokemon.id} pokemonInfo={pokemon} onClick={() => console.log(`hi`)}/>
                })}
                </StyledCardContainer>
            </Route>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        savedPokemon: state.pokedexReducer.pokemon,
    }
}

export default connect(mapStateToProps, {fetchPokemon, displayPokemon} )(PokemonList);