
import {FETCH_CHARS_LOADING, CHAR_FETCH_SUCCESS, CHAR_FETCH_ERROR,} from "./actions";
	

const initialState = {
	char: [],
	error: "",
};

export const reducer = (state = initialState, action)=>{
    
    switch (action.type) {
        
		case FETCH_CHARS_LOADING:
			return state 
                
        case CHAR_FETCH_SUCCESS:
			return {
                ...state, 
                char: action.payload
            };
        
		case CHAR_FETCH_ERROR:
			return {
				...state,
				error: "Whoops, Something went wrong",
			};
		default:
			return state;
	}
}


