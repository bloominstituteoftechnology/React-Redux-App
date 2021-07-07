const initialState = {
    loading: false,
    dog: 'https://images.dog.ceo/breeds/hound-basset/n02088238_9815.jpg'
};

export const dogPicReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING': return { ...state, loading: true };
        case 'NEW_DOG': return { ...state, loading: false, dog: action.payload };
        default: return state;
    }
};