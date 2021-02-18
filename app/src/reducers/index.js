import { FETCH_MEAL, MEAL_SUCCESS, MEAL_FAIL} from './../actions';

const initialState = {
  name: '',
  category:'',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_MEAL):
      return({
        ...state,
        isFetching: true
      });

    case(MEAL_SUCCESS):
      return({
        ...state,
        name: action.payload,
        category: action.payload,
        isFetching: false
      });

    case(MEAL_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });

    default:
      return state;
  }
};