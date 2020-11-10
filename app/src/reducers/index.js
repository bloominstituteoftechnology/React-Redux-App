import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  START_LOADING,
  ERROR_LOADING,
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  isError: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR_LOADING:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.message,
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
        isLoading: false,
        isError: "",
        error: "",
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
