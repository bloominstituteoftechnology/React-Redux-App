import { combineReducers } from 'redux'

import {FETCH_POKEMON_START, 
    FETCH_POKEMON_SUCCESS, 
    FETCH_POKEMON_FAIL,
    DISPLAY_POKE_START,
    DISPLAY_POKE_SUCCESS,
    DISPLAY_POKE_FAIL,
    SEARCH_POKE_FAIL,
    SEARCH_POKE_START,
    SEARCH_POKE_SUCCESS,
    ADD_POKEMON,
    REMOVE_POKEMON } from '../actions'

const initialState = {
    isLoading: false,
    pokemonData: [],
    error:""
}

const iniPokemon = []
const iniPokemonSearch = {
    isLoading: false,
    pokemonSearch:{},
    errors:""
}
const iniPokedex = {
    message:"",
    pokemon:[]
}

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

const pokemonSearchReducer = (state = iniPokemonSearch, action) => {
    switch(action.type) {
        case SEARCH_POKE_START:
            return {
                ...state,
                isLoading: true,
                error:""
            }
        case SEARCH_POKE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemonSearch:action.payload
            }
        case SEARCH_POKE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const pokedexReducer = (state = iniPokedex, action) => {
    console.log(action.type, action.payload)
    switch(action.type) {
        case ADD_POKEMON:
            return {
                message:"checking and adding pokemon to pokedex",
                pokemon:[...state.pokemon, (state.pokemon.some(pokemon => pokemon.id === action.payload.id) ? null : action.payload)]
            }
        case REMOVE_POKEMON:
            return {
                message:"removing pokemon from pokedex",
                pokemon:[...state.pokemon.filter(pokemon => pokemon.id !== action.payload)]
            }
        default:
            return state
    }
}

export default combineReducers({
    pokemonReducer,
    pokemonCardReducer,
    pokemonSearchReducer,
    pokedexReducer
})

// sorts by lowest id to highest id
const compare = (a, b) => {
    if (a.id < b.id)
    {return -1}
    if (a.id > b.id)
    {return 1}

    return 0
}