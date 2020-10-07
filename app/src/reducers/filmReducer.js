import { UPDATE_FILM } from "../actions";

const inititalState = {
  title: "Ghibli Films!",
};

export function filmReducer(state = inititalState, action) {
  console.log("film reducer", action);
  switch (action.type) {
    case UPDATE_FILM:
      console.log("update_film", action);
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}
