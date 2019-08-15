import { HARVARD_DATA_START, HARVARD_DATA_SUCCESS, HARVARD_DATA_FAILURE } from '../actions/actions'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HARVARD_DATA_START:
          return {
            ...state,
            isLoading: true,
            error: ''
          };
        case HARVARD_DATA_SUCCESS:
          return {
            ...state,
            isLoading: false,
            objects: action.payload,
            error: ''
          };
        default:
          return state;
      }
}

const initialState = { 
    objects: [],
    isLoading: false,
    error: ''
}