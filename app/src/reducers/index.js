import {
    FETCH_DATA,
    FETCH_SUCCESS
} from "../actions";

const initialState = {
most_wanted:{
    name: "",
    img: ""
}
}

export const federationReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
        return {
            ...state
        }
        case FETCH_SUCCESS:
            return{
                ...state,
                most_wanted:action.payload
            }
            default:
                return state;
    }
}