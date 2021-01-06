const initialState = {
	name: "",
	isFetching: false,
	error: "",
	description: ""
};

export const appReducer = ( state = initialState, action) => {
	switch(action.type) {
		case "FETCHING_RECIPE_START":
			return {
				...state,
				isFetching: true,
				error: ""
			}
		case "FETCHING_RECIPE_SUCCESS":
			return {
				...state,
				isFetching: false,
				name: action.payload.name,
				description: action.payload.description

			}
		// case "FETCHING_RECIPE_DESCRIPTION":
		// return {
		// 	...state,
		// 	isFetching: false,
		// 	description: action.payload
		// }
		case "FETCHING_RECIPE_ERROR":
			return {
				...state,
				isFetching:false,
				error: action.payload
			}
		default:
			return state;
	};
};