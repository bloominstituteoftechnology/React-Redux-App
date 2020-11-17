const initialState = {
    is_fetching: false,
    drinklist: [],
    error: ''
};

const drinkReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default drinkReducer;