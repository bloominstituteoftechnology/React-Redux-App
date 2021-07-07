import {
    FETCH_DATA,
    DATA_SUCCESS,
    DATA_ERROR,
    CHANGE_DATA,
    FETCH_DETAILS,
    TOGGLE_APPEARANCE
} from "../actions";

const initialState = {
    data: [],
    loading: false,
    status: "",
    selectedData: undefined,
    selectedDetails: {
        name: undefined
    },
    direction: "",
    shiny: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.payload.results],
                loading: false
            };
        case DATA_ERROR:
            return {
                ...state,
                status: "Error!",
                loading: false
            };
        case CHANGE_DATA:
            return {
                ...state,
                selectedData: state.data[action.payload]
            };
        case FETCH_DETAILS:
            return {
                ...state,
                selectedDetails: action.payload
            }
        case TOGGLE_APPEARANCE:
            return {
                ...state,
                [action.payload.appearance]: action.payload.value
            }
        default:
            return state;
    }
};
