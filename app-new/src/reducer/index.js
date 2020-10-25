const initialState = {
    loading: false,
    activity: []
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_ACTIVITY_START":
            return {
                ...state,
                loading: true
            };
        case "FETCHING_ACTIVITY_SUCCESS":
            return {
                ...state,
                activity: action.payload,
                loading: false
            };
        case "FETCHING_ACTIVITY_FAILURE":
            return {
                ...state,
                error: action.payload
            };
        default:
            return {
                state
            };
    };
};