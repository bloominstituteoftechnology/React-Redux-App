import { TOGGLE_EDITING, UPDATE_ARTIST } from "../actions/title";

export const initialState = {
    title: "Song Lyrics",
    editing: false
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_ARTIST:
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
    }
}