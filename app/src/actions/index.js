import axios from "axios";

export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const START_LOADING = "START_LOADING";
export const ERROR_LOADING = "ERROR_LOADING";

export const addCharacter = (id) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING });
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => dispatch({ type: ADD_CHARACTER, payload: res.data }))
      .catch((err) => dispatch({ type: ERROR_LOADING, payload: err }));
  };
};

export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
};
