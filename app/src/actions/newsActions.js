import axios from "axios";
import {FETCHING_NEWS_START, FETCHING_NEWS_SUCCESS, FETCHING_NEWS_FAILURE} from '../reducers/newsReducers';

// Step 3: action creators



export const getNews = () => (dispatch) => {
  console.log("getNews action");
  dispatch({ type: FETCHING_NEWS_START });
  axios
    .get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Gn80fkvSuepT1vfNReuJY1RTac0hs0fO")
    .then((res) => {
      dispatch({ type: FETCHING_NEWS_SUCCESS, payload: res.data });
      console.log("API Response: ", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_NEWS_FAILURE,
       
      })
      console.log("Error Response: ", err)});
    };

