import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const PokemonCard = (props) => {

    const [thisPokemon, setThisPokemon] = useState([])

    useEffect(() => {
        axios.get(props.pokemonUrl)
        .then(res => {
            console.log(res.data)
            setThisPokemon(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    

    return (
        <div>
            <p>{props.pokemonName}</p>
            {thisPokemon 
            ? <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${thisPokemon.id}.png`}/>
            <p>{`weight: ${thisPokemon.weight}`}</p>
            <p>{`height: ${thisPokemon.height}`}</p>
            </div>
            : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemonData:state.pokemonData,
    }
}

export default connect(mapStateToProps, {})(PokemonCard)
