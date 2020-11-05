import { combineReducers } from 'redux'

import {FETCH_POKEMON_START, 
    FETCH_POKEMON_SUCCESS, 
    FETCH_POKEMON_FAIL,
    DISPLAY_POKE_START,
    DISPLAY_POKE_SUCCESS,
    DISPLAY_POKE_FAIL } from '../actions'

const initialState = {
    isLoading: false,
    pokemonData: [],
    error:""
}

const iniPokemon = []

const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isLoading: true,
                error:""
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemonData:action.payload
            }
        case FETCH_POKEMON_FAIL:
            return {
                ...state,
                isLoading: false,
                error:action.payload
            }
        default:
            return state
    }
}

// sorts by lowest id to highest id
const compare = (a, b) => {
    if (a.id < b.id)
    {return -1}
    if (a.id > b.id)
    {return 1}

    return 0
}

const pokemonCardReducer = (state = iniPokemon, action) => {
    switch(action.type) {
        case DISPLAY_POKE_START:
            return state
        case DISPLAY_POKE_SUCCESS:
            // if state already exists do not overwrite
            return [...state, (state.some(state => state.id === action.payload.id) ? null : action.payload)].sort(compare)
        case DISPLAY_POKE_FAIL:
            return state
        default:
            return state
    }
}

export default combineReducers({
    pokemonReducer,
    pokemonCardReducer
})