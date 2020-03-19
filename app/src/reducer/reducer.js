import {GET_DATA, UPDATE_DATA} from '../actions/index';


export const initialState ={
    countries:[],
    isFetchingData: false
};


export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case GET_DATA:
            return{
                ...state,
                isFetchingData:true
            };
        case UPDATE_DATA:
            return{
                ...state,
                countries:action.payload,
                isFetchingData:false
            };

        default:
            return state;    
    }
}