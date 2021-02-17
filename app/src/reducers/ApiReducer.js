import { JOKE_SUCCESS_SETUP, JOKE_FAILED, JOKE_IS_FETCHING} from './../actions/ApiActions'

const initialState={
    joke:'',
    isFetching: false,
    error:''
}



export const ApiReducer = (state=initialState, action)=>{
switch(action.type){
    case(JOKE_IS_FETCHING):
        return({
            ...state,
            isFetching:true
        });
    case(JOKE_SUCCESS_SETUP):
        return({
            ...state,
            isFetching:false,
            joke: action.payload

        })
    case(JOKE_FAILED):
        return({
            ...state, 
            isFetching:false,
            error: action.payload
        })
    default:
        return state
    }
}