const initialState = {
    cards: [],
    searchTerm: "abcd",
    isFetching: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_POKEMON':
            return {
                ...state,
                searchTerm: action.payload
            }
        case 'SEARCH_POKEMON_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_POKEMON':
            return {
                ...state,
                cards: action.payload.data.cards,
                isFetching: false
            }
        default:
            return state;
    }
}