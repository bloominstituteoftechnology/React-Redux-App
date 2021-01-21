import {FETCH_CHARACTER_START, 
        FETCH_CHARACTER_FAIL, 
        FETCH_CHARACTER_SUCCESS } from "../actions/actions";


const initialState = {
   characters: [],
   error: '',
   isFetching: false,  
}


const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case(FETCH_CHARACTER_START):
            return({
                ...state,
                isFetching:true,
                error:'',
            })
        case(FETCH_CHARACTER_SUCCESS):
            return({
                ...state,
                characters: [...action.payload],
                isFetching: false
            })
        case(FETCH_CHARACTER_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching:false,
            })

            default: return (state);
    }

}



export default reducer;