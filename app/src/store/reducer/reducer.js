import {
    FETCH_HOUSES_START,
    FETCH_HOUSES_SUCCESS,
    FETCH_HOUSES_FAIL,
    SET_DISPLAY_HOUSE
} from '../actions'


const init = {
  houses: [],
  displayHouse: '',
  error: '',
  isFetching: false
};

export const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_HOUSES_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_HOUSES_SUCCESS:
        return {
          ...state,
          houses: payload,
          isFetching: false,
          error: ''
        };
      case FETCH_HOUSES_FAIL:
        return {
          ...state,
          error: payload,
          isFetching:false
        };
        case SET_DISPLAY_HOUSE:
            return {
                ...state,
                displayHouse:payload
            }
    default:
      return state;
  }
};
