import {} from '../actions/actions';

const initialState = {
    cards: [
        {
            picture: '',
            name: '',
        }
    ],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDS:
            return({
                ...state,
                picture: state.picture,
                name: '',
                isFetching: true,
                error: '',
            })
    }
}