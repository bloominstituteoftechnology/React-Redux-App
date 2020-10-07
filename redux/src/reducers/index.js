import {HERE_KITTY, CATS, KITTY_ERROR} from '../actions/index';

export const initialState={
    catImage: null,
    isLoading:false,
    error: ''
};
export const catReducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case HERE_KITTY:
            return{
                ...state,
                isLoading: true,
                error: ''
            }        
        case CATS:
            return{
                ...state,
                isLoading:false,
                catImage:action.payload
            }        
        case KITTY_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        
        default: 
        return state;
    }
};