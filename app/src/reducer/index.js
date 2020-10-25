const initialState = {
    characters: [],
    loading: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_CHARACTERS":
            return {...state, loading: true};
        case "FETCHING_CHARACTERS_SUCCESS":
            return {...state,
                 characters: action.payload, loading: false};
        case "FETCHING_CHARACTERS_FAILURE":
            return {...state, error: action.payload}; 
        default:
            return state;
    }
  };