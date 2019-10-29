import {
    FETCH_SONG_START,
    FETCH_SONG_SUCCESS,
    FETCH_SONG_ERROR
} from "../action/songs";

const initialState = {
    song: null,
   
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SONG_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SONG_SUCCESS:
            return {
                ...state,
                song: action.payload,
                isLoading: false
            };
        case FETCH_SONG_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}
