import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CATS = "UPDATE_CATS";
export const SET_ERROR = "SET_ERROR";

export const FETCH_IMG_DATA = "FETCH_IMG_DATA";
export const UPDATE_IMG = "UPDATE_IMG";
export const SET_IMG_ERROR = "SET_IMG_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios.defaults.headers.common["x-api-key"] =
      "68f94bb0-b13a-4e6b-9621-f6601e684818";
    axios
      .get("https://api.thecatapi.com/v1/breeds/")
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_CATS, payload: res.data });
      })
      .catch((err) => {
        console.error("error fetching data from getData api. err: ", err);
        dispatch({
          type: SET_ERROR,
          payload: "error fetching data from getData api",
        });
      });
  }, 1000);
};

export const getImage = (imageId) => (dispatch) => {
  dispatch({ type: FETCH_IMG_DATA });
  axios.defaults.headers.common["x-api-key"] =
    "68f94bb0-b13a-4e6b-9621-f6601e684818";
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${imageId}`)
    .then((res) => {
      //console.log("getImage res", res.data[0].breeds[0].id, res.data[0].url);
      const dataArr = [res.data[0].breeds[0].id, res.data[0].url];
      dispatch({
        type: UPDATE_IMG,
        payload: dataArr,
      });
    })
    .catch((err) => {
      // console.error("error fetching data from getImage api. err: ", err);
      dispatch({
        type: SET_IMG_ERROR,
        payload: "error fetching data from getImage api",
      });
    });
};
