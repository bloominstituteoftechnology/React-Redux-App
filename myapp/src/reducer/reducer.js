import {
  FETCH_HEROES_START,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAIL
} from "../actions/actions";

const initialState = {
  heroes: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);

  switch (action.type) {
    case FETCH_HEROES_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        heroes: action.payload,
        isFetching: false,
        error: null
      };

    case FETCH_HEROES_FAIL:
      return {
        ...state,
        heroes: [],
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
