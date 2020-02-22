import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
