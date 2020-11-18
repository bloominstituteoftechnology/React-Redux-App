import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  setTimeout(() => {
    axios
      .get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/")
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: {
            name: res.data.name,
          },
        });
      })
      .catch((error) => {
        console.error("error, error.message");
        dispatch({
          type: FETCH_DATA_FAIL,
          payload: `error from api', ${error.message}`,
        });
      });
  }, 3000);
};
