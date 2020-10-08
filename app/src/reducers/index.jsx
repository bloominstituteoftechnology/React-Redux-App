import {HERE_CAT, CAT, CAT_ERROR} from '../actions/index';

export const initialState={
    catImage: null,
    isLoading:false,
    error: ''
};
export const kittyReducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case HERE_CAT:
            return{
                ...state,
                isLoading: true,
                error: ''
            }        
        case CAT:
            return{
                ...state,
                isLoading:false,
                catImage:action.payload
            }        
        case CAT_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }

        default: 
        return state;
    }
}; 