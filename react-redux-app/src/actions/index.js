export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const FETCH_PLANET_DATA_PENDING = "FETCH_PLANET_DATA_PENDING";
export const FETCH_PLANET_DATA_SUCCESS = "FETCH_PLANET_DATA_SUCCESS";
export const FETCH_PLANET_DATA_ERROR = "FETCH_PLANET_DATA_ERROR";


export function fetchDataPending() {
    return  {
        type: FETCH_DATA_PENDING
    }
};

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}

export function fetchPlanetDataPending() {
    return {
        type: FETCH_PLANET_DATA_PENDING
    }
}

export function fetchPlanetDataSuccess(data) {
    return {
        type: FETCH_PLANET_DATA_SUCCESS,
        data: data
    }
}

export function fetchPlanetDataError(error) {
    return {
        type: FETCH_PLANET_DATA_ERROR,
        error: error
    }
}
