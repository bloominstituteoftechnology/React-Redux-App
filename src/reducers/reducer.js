import { FETCH_DATA, UPDATE_MISSIONS, SET_ERROR } from '../actions';


const initialState = {
    missions: [],
    isFetchingData: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                missions: []
            };
        case UPDATE_MISSIONS:
            return{
                ...state,
                missions: action.payload,
                isFetchingData: false
                };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
                };
        default: 
            return state;
    }
};
