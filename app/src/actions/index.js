import axios from "axios";
export const GET_DOG_LIST = "GET_DOG_LIST";
export const FETCHING_DOGS_SUCCESS ="FETCHING_DOGS_SUCCESS";
export const FETCHING_DOGS_ERROR = "FETCHING_DOGS_ERROR";

const headers = {
    Accept: "application/json"
  };
  
  export const getDogs = () => (dispatch) => {
    console.log("get dog list action");
    dispatch({ type: GET_DOG_LIST });
    axios
      .get("https://dog.ceo/api/breeds/image/random", { headers: headers })
      .then((res) => {
        dispatch({ type: FETCHING_DOGS_SUCCESS, payload: res.data.message });
        console.log("API Response: ", res.data.message);
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_DOGS_ERROR,
          payload: `${err.res.data.message} code: ${err.res.data.code}`
        });
        console.log(err);
      });
  };
  