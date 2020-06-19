import {
    GET_JOKE,
    UPDATE_JOKE,
} from '../actions'

const initialState = {
    jokes: [],
    categories: [],
};

export const chuckReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_JOKE: 
        return state;
        default: 
        return state;
    }
}