import { GET_DATA, SUCCESS, FAIL } from '../actions/index';

const initialState = {
    artist: [],
    songTitle:[],
    songLyrics:[],
    test: "SUCCESS",
    getting: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                getting:true,
                error:""
            }
        case SUCCESS:
            return {
                ...state,
                getting: false,
                lyric: action.payload,
                error:""
            };
            case FAIL:
                return {
                    ...state,
                    error: action.payload
                }
        default:
            return state;
    }
};