import { FETCH_DATA, NEW_QUOTE, SET_ERROR } from "../actions";

const initState = {
  quotes: [
    {
      title:
        "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.",
      author: "Douglas Crockford",
      id: "5a97f4c5ccdfe50004febf3c"
    }
  ],
  loading: false,
  error: ""
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        quotes: []
      };
    case NEW_QUOTE:
      return {
        ...state,
        loading: false,
        quotes: [
          ...state.quotes,
          { title: action.payload.en, author: action.payload.author }
        ]
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
