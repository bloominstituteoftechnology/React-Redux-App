import axios from 'axios';

export const FETCH_BREWERY_LOADING = "FETCH_BREWERY_LOADING";
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS";
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL";

export const getBrewery = () => dispatch => {
    dispatch(fetchBreweryLoading());

    axios
    .get('https://api.openbrewerydb.org/breweries?by_type=micro')
    .then(res => {
        console.log(res.data)
        dispatch(fetchBrewerySuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(fetchBreweryFail(err.Response.code))
    })
};

export const fetchBreweryLoading = () => {
    return ({ type: FETCH_BREWERY_LOADING})
}

export const fetchBrewerySuccess = (breweries) => {
    return ({ type: FETCH_BREWERY_SUCCESS, payload: breweries})
}

export const fetchBreweryFail = (err) => {
    return ({ type: FETCH_BREWERY_FAIL, payload: err})
}