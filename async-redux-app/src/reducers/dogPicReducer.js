const initialState = {
    editing: false,
    loading: false,
    dog: 'https://images.dog.ceo/breeds/hound-basset/n02088238_9815.jpg'
};

export const dogPicReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EDITING': return { ...state, editing: true };
        case 'NOT_EDITING': return { ...state, editing: false };
        case 'LOADING': return { ...state, loading: true };
        case 'NEW_DOG': console.log("action.payload = ",action.payload); return { ...state, loading: false, dog: action.playload };
        default: return state;
    }
};