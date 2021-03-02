import axios from 'axios';

export const FETCHING_API_START = "FETCHING_API_LOADING";
export const FETCHING_API_SUCCESS = "FETCHING_API_SUCCESS";
export const FETCHING_API_FAILURE = "FETCHING_API_FAIL";
export const SEARCH_VALUE = 'SEARCH_VALUE';


const initialSearchValue = '';

export const searchValue = (newSearch) => {
  return { type: SEARCH_VALUE, payload: newSearch}
}

const options = {
  method: "GET",
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
  params: { query: initialSearchValue },
  headers: {
    "x-rapidapi-key": "b461d692bemshe80b4354ca6ba03p184f2ejsn08a3bb994638",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};


export const getRecipe = () => dispatch => {
    dispatch({ type: FETCHING_API_START });
        axios
        .request(options)
        .then((res) => {
          dispatch({ type: FETCHING_API_SUCCESS, payload: res.data.results })
        })
        .catch((error) => {
          dispatch({ type: FETCHING_API_FAILURE, payload: error})
          console.log("This API request failed", error);
        });
}

