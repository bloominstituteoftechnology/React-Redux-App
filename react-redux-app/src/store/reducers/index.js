import { FECTHING_BREWERY_START, FECTHING_BREWERY_SUCCESS, FECTHING_BREWERY_FAILURE } from '../actions'



const initialState = {
    brewery: [],
    url: 'https://api.openbrewerydb.org/breweries?page=1&per_page=12',
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FECTHING_BREWERY_START:
        return {
            ...state,
            isFetching: true,
            error: ''
        }
        case FECTHING_BREWERY_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: '',
            brewery: action.payload
        }
        case FECTHING_BREWERY_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }
        default: 
          return state;
    }
}


export default reducer;