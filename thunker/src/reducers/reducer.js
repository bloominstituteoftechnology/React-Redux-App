import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, FETCH_NEXT_SUCCESS } from "../actions/actions"
import axios from "axios"

const initialState = {
    pokemon: [],
    error: (""),
    isFetching: false,
    nextURL: "https://pokeapi.co/api/v2/pokemon",
    lastURL: "https://pokeapi.co/api/v2/pokemon"
}

const reducer = (state = initialState, action) => {
    //console.log(state)
    switch(action.type) {

        case FETCH_POKEMON_START:
            return {
                ...state,
                error: (""),
                isFetching: true
            }

        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload.results,
                error: (""),
                isFetching: false,
                nextURL: action.payload.next,
                lastURL: action.payload.previous
            }

        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case FETCH_NEXT_SUCCESS:
            console.log("next in reducer")
            return {
                state
            }

        default:
            return  state
    }
}

export default reducer