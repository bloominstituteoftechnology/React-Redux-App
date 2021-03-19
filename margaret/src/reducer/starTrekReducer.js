import {IS_LOADING, SUCCESS_FETCH, IS_ERROR} from '../action/starTraction.js';

const initialState = {
    isLoading: false, 
    starTrek: ""
}

const starTrekReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return{
               ...state, 
               isLoading: true
            };
        case SUCCESS_FETCH:
            return{
                ...state,
                isLoading:false,
                starTrek: action.payload 
            }
        case IS_ERROR:
            return{
                ...state, 
                isLoading: false, 
                error: action.payload 
            };
        default:
            return {
                state
            };
    }
}
export default starTrekReducer;