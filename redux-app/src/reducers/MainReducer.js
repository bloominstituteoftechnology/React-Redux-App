
const initialState = {
    characters: [],
    loadingCharacters: true
}


const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE': 
            return {
                ...state,
                characters: action.payload,
                loadingCharacters: false
            }
        default: 
            return {...state}
    }
}
export default MainReducer;