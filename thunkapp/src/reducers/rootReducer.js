import React from 'react';
import {FETCH_PICS_START,
FETCH_PICS_SUCCESS,
FETCH_PICS_FAIL} from '../actions';


const initialState = {
    pics:[
    ],
    err:'',
    isFetching:false
}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type){

        case FETCH_PICS_START:
            // console.log('fetchstart')
            //clear pic on loading possibility, in reality i wouldnt have a loading symbol
            return{
                ...state,
                err:'',
                isFetching:true
            };
        case FETCH_PICS_SUCCESS:
            console.log('fetchsuccess')
                        console.log('payload',action.payload)
            return{
                ...state,
                pics:[action.payload]
,                err:'',
                isFetching:false
            };
        case FETCH_PICS_FAIL:
            console.log('fetchfail')
            return{
                ...state,
                err:'error',
                isFetching:false
            }

    }
        


     return state
}