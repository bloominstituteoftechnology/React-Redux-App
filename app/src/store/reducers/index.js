 import { FETCH_FACTS, FETCH_FACTS_SUCCESS, FETCH_FACTS_ERROR } from '../actions/HolidaysAction'


const initialState = {
    facts: [],
    loadingFacts: true,
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FACTS:
       
            return { ...state,
                 loadingFacts: true
     }
         case FETCH_FACTS_SUCCESS:
             return { ...state,
             facts: action.payload,
             loadingFacts: false
         }
         case FETCH_FACTS_ERROR:
             return { ...state,
            
             loadingFacts: false,
             errorMessage: action.payload.message
         }
        default:
            return state
}}