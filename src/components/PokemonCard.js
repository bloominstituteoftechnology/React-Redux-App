import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'

// import { displayPokemon } from '../store/actions'

const StyledDiv = styled.div`
border-radius: .3rem;
color: rgb(50,50,50);
box-shadow: 0 0 10px rgb(150,150,150);
width: 17rem;
padding: 1rem 0;
margin: 1rem;
`

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

const PokemonCard = (props) => {
    const { pokemonInfo } = props


    return (
        pokemonInfo.name ? 
        (<StyledDiv className="pokemon-card">
            <p>{pokemonInfo.name && capitalize(pokemonInfo.name)}</p>
            {pokemonInfo 
            ? <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`}/>
            <p>{`Weight: ${pokemonInfo.weight}`}</p>
            <p>{`Height: ${pokemonInfo.height}`}</p>
            </div>
            : <p>Loading Pokemon...</p>}
        </StyledDiv>) 
        : null

    )
}

export default PokemonCard
