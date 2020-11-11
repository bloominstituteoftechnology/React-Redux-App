import axios from "axios";

export const FETCH_HEROES_START = "FETCH_HEROES_START";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

export const getHeroes = () => dispatch => {
  dispatch({ type: FETCH_HEROES_START });
  axios
    .get("https://api.opendota.com/api/heroes")
    .then(res => {
      //   console.log(res.data);
      dispatch({ type: FETCH_HEROES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_HEROES_FAIL, payload: err }));
};

// export const heroesLoading = () => ({ type: FETCH_HEROES_START });

// export const heroesLoadingSuccess = data => ({
//   type: FETCH_HEROES_SUCCESS,
//   payload: data
// });

// export const heroesLoadingFailed = error => ({
//   type: FETCH_HEROES_FAIL,
//   payload: error
// });

// export function fetchHeroes() {
//   return function(dispatch) {
//     dispatch(heroesLoading());

//     return fetch("https://overwatch-api.net/api/v1/hero")
//       .then(response => response.json())
//       .then(json => dispatch(heroesLoadingSuccess(json.results)))
//       .catch(error => dispatch(heroesLoadingFailed(error)));
//   };
// }
