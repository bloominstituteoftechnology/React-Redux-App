import { FETCHING_POKEMON, FETCH_SUCCESS, FETCH_FAIL, TOGGLE_EVOL_LINE } from "../actions/getPokemon"

export const initialState={
    pokemon:[],
    isFetching:false,
    toggled:false,
    error:''

}



export const pokemonReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCHING_POKEMON:
            return{...state,
                isFetching:true,
                error:''
            }
        case FETCH_SUCCESS:
            return{...state,
                pokemon:action.payload,
                isFetching:false,
                error:''
            }
        case FETCH_FAIL:
            return{...state,
                error: action.payload
            }
        case TOGGLE_EVOL_LINE:
            return{...state,
                toggled:true
            }
        default:
            return state
    }
}