const initialState = {
    name: '',
    isFetching: false,
    error: '',
    num: ''
};

export const pokemonReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'FETCH_POKEMON_START':
          return {
            ...state,
            isFetching: true
          };
        case 'FETCH_POKEMON_SUCCESS':
          return {
            ...state,
            isFetching: false,
            name: action.payload.name,
            error: '',
            num: action.payload.id
          };
        case 'FETCH_POKEMON_FAILURE':
          return {
            ...state,
            isFetching: false,
            error: action.payload
          };
        default:
          return state;
      }
};