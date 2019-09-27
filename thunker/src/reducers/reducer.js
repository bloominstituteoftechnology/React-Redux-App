import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from "../actions/actions"

const initialState = {
    pokemon: [],
    error: (""),
    isFetching: false
}

const reducer = (state = initialState, action) => {
    console.log(state)
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
                pokemon: action.payload,
                error: (""),
                isFetching: false
            }

        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }

        default:
            return  state
    }
}

export default reducer