import {
    FETCHING_PERSON_START, // toggle isFetching
    FETCHING_PERSON_SUCCESS, //  update person, toggle isFetching
    FETCHING_PERSON_FAILURE //  update error, toggle isFetching
} from "../actions/IndexAction";

const initialState = {
    person: null,
    isFetching: false,
    error: ""
};

export const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PERSON_START:
            // console.log('Change the state', action.data.results)
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_PERSON_SUCCESS:
            return {
                ...state,
                person: action.payload,
                isFetching: false
            };
        case FETCHING_PERSON_FAILURE:
            return {
                ...state,
                error: "Hit an error",
                isFetching: false
            };
        default:
            return state;
    }
};
