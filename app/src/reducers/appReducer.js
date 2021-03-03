import { FETCH_CHARACTERS, FETCH_START, FETCH_ERROR} from '../actions/appActions'


const initialState = {
    characters: [],
    isFetching: false,
    error:'',

}

 export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                isFetching:true,
            };
        case FETCH_CHARACTERS:
            return{
                ...state,
                characters: action.payload,
                isFetching: false,
            }
        case FETCH_ERROR:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }    

        default:
            return state;
    }

}