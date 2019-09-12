import axios from 'axios';

export const FETCHING_IP_START = "FETCHING_IP_START";
export const FETCHING_IP_SUCCESS = "FETCHING_IP_SUCCESS";
export const FETCHING_IP_FAILURE = "FETCHING_IP_FAILURE";
export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const DATA_POPULATED = "DATA_POPULATED";

// export const getIp = () => dispatch => {
//     dispatch({ type: FETCHING_IP_START });
//     axios
//         .get('https://api.ipify.org?format=json')
//         .then(res => dispatch({ type: FETCHING_IP_SUCCESS, payload: res.data.ip }))
//         .catch(err => dispatch({ type: FETCHING_IP_FAILURE, payload: err }))
// };

// export const getData = ip => dispatch => {
//     dispatch({ type: FETCHING_DATA_START });
//     axios
//         .get(`https://api.kwelo.com/v1/network/ip-address/location/${ip}`)
//         .then(res => {
//             dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data.data.geolocation });
//             dispatch({ type: DATA_POPULATED });
//         })
//         .catch(err => dispatch({ type: FETCHING_DATA_FAILURE, payload: err }));
// };

export const asyncGetIp = () => async dispatch => {
    dispatch({ type: FETCHING_IP_START });
    try {
        const data = await axios.get('https://api.ipify.org?format=json');
        dispatch({ type: FETCHING_IP_SUCCESS, payload: data.data.ip });
    } catch (err) {
        dispatch({ type: FETCHING_IP_FAILURE, payload: err })
    }
};

export const asyncGetData = ip => async dispatch => {
    dispatch({ type: FETCHING_DATA_START });
    try {
        const data = await axios.get(`https://api.kwelo.com/v1/network/ip-address/location/${ip}`);
        dispatch({ type: FETCHING_DATA_SUCCESS, payload: data.data.data.geolocation });
        dispatch({ type: DATA_POPULATED });
    } catch (err) {
        dispatch({ type: FETCHING_DATA_FAILURE, payload: err });
    }
};