import Axios from 'axios';

export const getActivity = () => dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" })
    Axios 
        .get("http://www.boredapi.com/api/activity/")
        .then(res => {
            dispatch({
                type: "FETCHING_ACTIVITY_SUCCESS",
                payload: res.data.activity
            })
            console.log("Response: ", res.data)
        })
        .catch(err => {
            dispatch({
                type: "FETCHING_ACTIVITY_FAILURE",
                payload: err
            })
            console.log("Error: ", err)
        })
};