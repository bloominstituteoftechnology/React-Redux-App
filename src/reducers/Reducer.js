const initialState = {
    data: null,
    fetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH':
            return {
                ...state,
                fetching: true
            };

        case 'SUCCESS':
            return {
                ...state,
                data: action.payload,
                fetching: false,
                error: ''
            };
        
        case 'ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        
        default:
            return state;
    };
};