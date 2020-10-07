import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../Actions/actions';

const initialState = {
    character:[],
    isFetching: false,
    error:'',
}

function reducer( state = initialState, action) {
    console.log('reducer', action.payload);
    switch (action.type){
        case FETCH_CHARACTERS_START:
            return{
                ...state,
                isFetching: true,
                error:'',
                character:[]
            };
            case FETCH_CHARACTERS_SUCCESS:
                console.log(action.payload)
                return{
                    ...state,
                    error:'',
                    isFetching:false,
                    character: action.payload
                }
            case FETCH_CHARACTERS_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isFetching: false,
                }
            default:
                return state;
    }
}

export default reducer;