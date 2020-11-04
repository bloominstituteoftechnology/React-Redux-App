import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'

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

    const [thisPokemon, setThisPokemon] = useState([])

    useEffect(() => {
        axios.get(props.pokemonUrl)
        .then(res => {
            // console.log(res.data)
            setThisPokemon(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    

    return (
        <StyledDiv>
            <p>{capitalize(props.pokemonName)}</p>
            {thisPokemon 
            ? <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${thisPokemon.id}.png`}/>
            <p>{`Weight: ${thisPokemon.weight}`}</p>
            <p>{`Height: ${thisPokemon.height}`}</p>
            </div>
            : <p>Loading Pokemon...</p>}
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemonData:state.pokemonData,
    }
}

export default connect(mapStateToProps, {})(PokemonCard)
