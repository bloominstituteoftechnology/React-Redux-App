import { TOGGLE_EDITING, UPDATE_TITLE } from "../action/title";

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
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
    }
}
