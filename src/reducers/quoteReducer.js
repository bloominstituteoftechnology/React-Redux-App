import {FETCH_DATA, UPDATE_QUOTE, SET_ERROR} from '../actions';

const initialState ={
    quotes:[],
    isFetchingData: false,
    error:''
};

// export const getData = () =>{
//     return{

//     }
// }

export const quotesReducer = (state=initialState, action) =>{
  console.log("Action from reducer", action)
    switch(action.type) {
        case FETCH_DATA :
            return {
            
                ...state,
                isFetchingData: true,
                quotes: []
            };
        case UPDATE_QUOTE:
            return{
                ...state,
                quotes:action.payload,
                isFetchingData: false
            };
            case SET_ERROR :
                return{
                    ...state,
                    isFetchingData: false,
                    error: action.payload
                }
        default:
            return state;
    }
};