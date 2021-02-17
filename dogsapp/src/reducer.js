import { FETCH_IMAGES_LOADING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILED} from './actions/actions';

const initialState = {
  images: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_IMAGES_LOADING):
      return({
        ...state,
        isFetching: true
      });

    case(FETCH_IMAGES_SUCCESS):
      return({
        ...state,
        images: action.payload,
        isFetching: false
      });

    case(FETCH_IMAGES_FAILED):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });

    default:
      return state;
  }
};