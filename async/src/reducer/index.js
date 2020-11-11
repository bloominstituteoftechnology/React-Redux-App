import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE }  from '../action'

//list states
const initialState={
    dogPics:[],
    isFetching: false,
    error: ''
}

//reducer, actions will transition from state to state
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: '',
                dogPics: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default reducer