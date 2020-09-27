

const initialState = {
    dogBreed: [],
    isFectching: false,
    fetchingError: '',
    dogPic:''
   
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BREED_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_BREED_SUCCESS':
            return {
                ...state,
                isFetching: false,
                dogBreed: action.payload
            }
        case 'FETCH_BREED_FAILURE':
            return {
                ...state,
                isFetching: false,
                fetchingError: action.payload
            } 
        case 'FETCH_DOG_PIC_START':
            return {
                ...state,
                isFetching: true,
            } 
        case 'FETCH_DOG_PIC_SUCCESS':
            return {
                ...state,
                isFetching: false,
                dogPic: action.payload
            } 
        case 'FETCH_DOG_PIC_FAILURE':
            return {
                ...state,
                isFetching: false,
                fetchingError: action.payload
            } 
        default:
            return state;
    }
};