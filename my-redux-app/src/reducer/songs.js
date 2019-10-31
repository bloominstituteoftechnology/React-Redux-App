import {
    SONG_NAME,
    SONG_SUCCESS,
    SONG_ERROR
} from "../action/songs";

const initialState = {
    songs: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SONG_NAME:
            return {
                ...state,
                isLoading: true
            };
        case SONG_SUCCESS:
            return {
                ...state,
                songs: action.payload,
                isLoading: false
            };
        case SONG_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: true
            };
        default:
            return state;
    }
}
