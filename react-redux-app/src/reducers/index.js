import {
  FETCH_POKEMON_LOADING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILED
} from "../actions";

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_POKEMON_LOADING:
      return {
        ...state,
        isFetching: true,
        
        
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        
      };
    case FETCH_POKEMON_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
