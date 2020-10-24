import { FETCHING_ADVICE_START } from '../actions/AppActions'
import { FETCHING_ADVICE_SUCCESS } from '../actions/AppActions'
import { FETCHING_ADVICE_FAILURE } from '../actions/AppActions'

export const initialState = { 
    title: "Advice Corner",
    advice: [],
    loading: true,
    error: ''
}


export const AppReducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case FETCHING_ADVICE_START:
            return { 
                ...state, 
                loading: true,
                error: ''
            };
        case FETCHING_ADVICE_SUCCESS:
            return { 
                ...state, 
                advice: action.payload, 
                loading: false,
                error: ''
             };
        case FETCHING_ADVICE_FAILURE:
            return { 
                ...state, 
                error: action.payload
                };
              default:
                return state;
    }
}