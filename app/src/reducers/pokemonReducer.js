const { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE } = require("../actions/pokemonActions")

const initialState={
    pokemon:[],
    isFetching:false,
    error1:'',
    details:[],
    error2:''
}

export const pokemonReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POKEMON_START:
            return{...state,
                isFetching: true,
                error:''
            }
        case FETCH_POKEMON_SUCCESS:
            return{...state,
            pokemon:action.payload,
            isFetching:false,
            error1:''
            }
        case FETCH_POKEMON_FAILURE:
            return{...state,
            error:action.payload
            }
        case FETCH_DETAILS_SUCCESS:
            return {...state,
            isFetching:false,
            details:[action.payload],
            error2:''
        }
        case FETCH_DETAILS_FAILURE:
            return {...state,
            error2:action.payload
            }
        default:
            return state
    }
}