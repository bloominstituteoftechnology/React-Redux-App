const initialState = {
    cityName:"",
}

export const formReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "SEARCH_TERM" : 
            return {
                ...state,
                cityName: action.payload
            }
        default:
            return state
    }
}