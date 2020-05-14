const initialState = {
    cards: [],
    searchTerm: "Squirtle"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_POKEMON':
            return {
                ...state,
                searchTerm: action.payload
            }
        case 'FETCH_POKEMON':
            return {
                ...state,
                cards: action.payload.data.cards
            }
        default:
            return state;
    }
}