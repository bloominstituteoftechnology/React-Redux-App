import { combineReducers } from 'redux';
import {
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    FETCH_PLANET_DATA_PENDING,
    FETCH_PLANET_DATA_SUCCESS,
    FETCH_PLANET_DATA_ERROR
} from "./actions";


const initialDataState = {
    pending: false,
    data: [],
    error: null
}


function dataReducer(state=initialDataState, action) {
    switch(action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
};

export const getData = state => state.data;
export const getDataPending = state => state.pending;
export const getDataError = state => state.error;

const initialPlanetData = {
    pending: false,
    data: [],
    error: null
}

function planetReducer(state=initialPlanetData, action) {
    switch(action.type) {
        case FETCH_PLANET_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PLANET_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case FETCH_PLANET_DATA_ERROR:  
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
                return state;    
    }
}

export const getPlanetData = state => state.data;
export const getPlanetDataPending = state => state.pending;
export const getPlanetDataError = state => state.error;


export const reducer = combineReducers({
    dataReducer,
    planetReducer
  });