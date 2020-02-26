import { 
     GET_JOKE,
     JOKE, 
     JOKE_ERROR } from "../actions/index";

export const initialState = {
    joke: ['Chuck Norris counted to infinity—three times.'],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case JOKE:
            return{
                ...state, 
                isLoading: false,
                joke: action.payload
            }
        case JOKE_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    };
}