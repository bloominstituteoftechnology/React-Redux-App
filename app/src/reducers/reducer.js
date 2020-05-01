import {
	FETCH_CHARS,
	CHAR_FETCH_SUCCESS,
	CHAR_FETCH_ERROR,
} from "../actions/action";

const initialState = {
	char: [],
	error: "",
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_CHARS:
			return {
				...state, // status message, isLoading : true/false
				};
		case CHAR_FETCH_SUCCESS:
			return {
				...state, // payload
			};
		case CHAR_FETCH_ERROR:
			return {
				...state,
				error: "Something went wrong",
			};
		default:
			return state;
	}
}

export default reducer;

// fetching
// feteched
// errorFetching