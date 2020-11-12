import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import PokemonCard from './PokemonCard'

const iniFormValues = {
    "search-item":''
}

const iniPokemonInfo = {
    pokemonData:{},
    errors:''
}

const StyledForm = styled.form`

.submit-button {
    background-color: rgb(255,255,102);
    :hover {
        background-color: rgb(255,255,153);
    }
}

.pokemon-card {
    margin: 1.5rem auto 1rem auto;
}
`

const SearchForm = () => {
    const [ formValues, setFormValues ] = useState(iniFormValues)
    const [pokemonInfo, setPokemonInfo] = useState(iniPokemonInfo)

    const handleChange = (event) =>{
        const { name, value } = event.target
        setFormValues({...formValues, [name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${formValues['search-item']}`)
        .then(res => {
            console.log(res)
            setPokemonInfo({
                errors:'',
                pokemonData:res.data
            })
        })
        .catch(err => {
            console.log(err)
            console.log(err.response.data)
            setPokemonInfo({
                ...pokemonInfo,
                errors:err.response.data,
            })
        })
    }

    return (
        <StyledForm>
            <TextField 
                id="outlined-basic" 
                label="Search by Name or ID" 
                variant="outlined" 
                size='small'
                type='text'
                name='search-item'
                value={formValues["search-item"]}
                onChange={handleChange}
            />
            <Button className='submit-button' onClick={onSubmit}>Search For Pokemon</Button>
            {pokemonInfo.errors ? <p style={{color:'red'}}>Pokemon {pokemonInfo.errors}</p> : <PokemonCard pokemonInfo={pokemonInfo.pokemonData}/>}
        </StyledForm>
    )
}

export default SearchForm