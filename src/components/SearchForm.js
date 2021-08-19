import React, { useState } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {searchPokemon} from '../store/actions'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import PokemonCard from './PokemonCard'

const iniFormValues = {
    "search-item":''
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

const SearchForm = (props) => {
    const [ formValues, setFormValues ] = useState(iniFormValues)

    const {pokemonInfo} = props

    const handleChange = (event) =>{
        const { name, value } = event.target
        setFormValues({...formValues, [name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.searchPokemon(formValues['search-item'])
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
            {pokemonInfo.name ? <PokemonCard pokemonInfo={pokemonInfo}/> : <p style={{color:'red'}}>Error Finding Pokemon {props.errors}</p>}
        </StyledForm>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.pokemonSearchReducer.isLoading,
        pokemonInfo: state.pokemonSearchReducer.pokemonSearch,
        errors: state.pokemonSearchReducer.errors
    }
}

export default connect(mapStateToProps, {searchPokemon})(SearchForm)