import { GET_JOKE_START, GET_JOKE_SUCCESS, GET_JOKE_FAIL } from '../actions/index.js'

const initialState = {
  joke: `Time waits for no man. Unless that man is Chuck Norris.`,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_JOKE_START:
    return {
      joke: '',
      isFetching: true,
      error: ''
    }
  case GET_JOKE_SUCCESS:
    return {
      ...state,
      joke: payload,
      isFetching: false,
    }
  case GET_JOKE_FAIL:
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  default:
    return state
  }
}