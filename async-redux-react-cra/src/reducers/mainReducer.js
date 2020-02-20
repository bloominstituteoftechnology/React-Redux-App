 
 import {GET_DATA, UPDATE_HOUSES} from '../actions/actionIndex';
 
 const initialState = {
     houses:[],
     isFetchingData:false
 };


export const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                isFetchingData:true
            };
            case UPDATE_HOUSES:
                return {
                    ...state,
                    houses:action.payload,
                    isFetchingData:false
                };
        default: return state;
    }
}