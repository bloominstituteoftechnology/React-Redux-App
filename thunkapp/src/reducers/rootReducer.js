import React from 'react';
import {FETCH_PICS_START,
FETCH_PICS_SUCCESS,
FETCH_PICS_FAIL} from '../actions';


const initialState = {
    comic:'pics',
    err:'',
    isFetching:false
}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type){

        case FETCH_PICS_START:
            return{
                ...state
            };
        case FETCH_PICS_SUCCESS:
            return{
                ...state
            };
        case FETCH_PICS_FAIL:
            return{
                ...state
            }

    }
        


     return state
}