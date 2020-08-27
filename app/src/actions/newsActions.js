import axios from "axios";

// Step 3: action creators
import { UPDATE_TITLE, TOGGLE_EDITING } from "../reducers";
export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export const updateTitle = (newTitle) => {
  return { type: UPDATE_TITLE, payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getNews = () => (dispatch) => {
  console.log("getNews action");
  dispatch({ type: "FETCHING_NEWS_START" });
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/{section}.json/", { headers: headers })
    .then((res) => {
      dispatch({ type: "FETCHING_NEWS_SUCCESS", payload: res.data.news });
      console.log("API Response: ", res);
    })
    .catch((err) => {
      dispatch({
        type: "FETCHING_NEWS_FAILURE",
        payload: `${err.response.message} code: ${err.response.code}`
      });
      console.log(err);
    });
};
