import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard'
import { fetchPokemon } from '../store/actions'
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

    return (
        <div>
            <StyledHeader>
                <h2>My Pokemon List</h2>
            </StyledHeader>
            {props.isLoading ? <p>Loading Pokemon List...</p> : null}
            {props.error ? <p style={{color:"red"}}>{props.error}</p> : null}
            <StyledCardContainer>
            {props.pokemonData.map(pokemon => {
                return <PokemonCard key={pokemon.name} pokemonName={pokemon.name} pokemonUrl={pokemon.url}/>
            })}
            </StyledCardContainer>
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

export default connect(mapStateToProps, {fetchPokemon} )(PokemonList);