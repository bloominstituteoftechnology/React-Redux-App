import {    
    FETCHING_IP_START,
    FETCHING_IP_SUCCESS,
    FETCHING_IP_FAILURE,
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    DATA_POPULATED
} from '../actions';

const initialState = {
    ip: '',
    ipData: {},
    isFetchingIp: false,
    isFetchingIpData: false,
    error: {},
    dataPopulated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_IP_START:
            return {
                ...state,
                isFetchingIp: true,
                error: {}
            };
        case FETCHING_IP_SUCCESS:
            return {
                ...state,
                isFetchingIp: false,
                ip: action.payload
            };
        case FETCHING_IP_FAILURE:
            return {
                ...state,
                isFetchingIp: false,
                error: action.payload
            };
        case FETCHING_DATA_START:
            return {
                ...state,
                isFetchingIpData: true,
                error: {}
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetchingIpData: false,
                ipData: action.payload
            };
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetchingIpData: false,
                error: action.payload
            };
        case DATA_POPULATED:
            return {
                ...state,
                dataPopulated: true
            };
        default:
            return state;
    }
}

export default reducer;