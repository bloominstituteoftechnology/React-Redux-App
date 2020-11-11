import {
    fetchDataPending,
    fetchDataSuccess,
    fetchDataError,
    fetchPlanetDataPending,
    fetchPlanetDataSuccess,
    fetchPlanetDataError
} from "./actions";

export  function fetchData() {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch("https://swapi.co/api/planets/?format=json")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw res.error;
            }
            dispatch(fetchDataSuccess(res.results));
            // return res.results;
        })
        .catch(error => {
            dispatch(fetchDataError(error));
        })
    }
}

export function fetchPlanetData(id) {
    return dispatch => {
        dispatch(fetchPlanetDataPending());
        fetch(`https://swapi.co/api/planets/${id}/?format=json`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw res.error;
            }
            
            dispatch(fetchPlanetDataSuccess(res));
        })
        .catch(error => {
            dispatch(fetchPlanetDataError(error));
        })
    }
}