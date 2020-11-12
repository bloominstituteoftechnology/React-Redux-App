import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { fetchPokemon, displayPokemon } from '../store/actions'
import SearchForm from './SearchForm'

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

    useEffect(() => {
        props.fetchPokemon()
        
    }, [])
    useEffect(() => {
        props.pokemonData.forEach(pokemon => props.displayPokemon(pokemon.url))
        console.log(`running displayPokemon`)
    },[props.pokemonData])

    return (
        <div>
            <StyledHeader>
                <h2>My Pokemon List</h2>
                <SearchForm />
            </StyledHeader>
            {props.isLoading ? <p>Loading Pokemon List...</p> : null}
            {props.error ? <p style={{color:"red"}}>{props.error}</p> : null}
            <Route path='/'>
                <StyledCardContainer>
                {props.pokemonCardData.map(pokemon => {
                    return <PokemonCard key={pokemon.id} pokemonInfo={pokemon} onClick={() => console.log(`hi`)}/>
                })}
                </StyledCardContainer>
            </Route>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.pokemonReducer.isLoading,
        pokemonData: state.pokemonReducer.pokemonData,
        pokemonCardData: state.pokemonCardReducer,
        error: state.pokemonReducer.error
    }
}

export default connect(mapStateToProps, {fetchPokemon, displayPokemon} )(PokemonList);