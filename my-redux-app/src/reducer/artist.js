import { TOGGLE_EDITING, UPDATE_ARTIST } from "../action/artist";

export const initialState = {
    artist: "",
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