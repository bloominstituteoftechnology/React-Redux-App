import axios from 'axios';

export const GET_RECIPES_START = 'GET_RECIPES_START';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE';

export const getRecipes = () => {
    return (dispatch) => {
        dispatch({ type: GET_RECIPES_START });

        axios
            .get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/')
            .then((res) => {
                dispatch({ type: GET_RECIPES_SUCCESS, payload: res.data.results });
            })
            .catch((err) => {
                dispatch({ type: GET_RECIPES_FAILURE, payload: err.message  });
            })
    };
};