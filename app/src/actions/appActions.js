const fetch = require("node-fetch");

const getRand = (x) => {
  //gets random integer on [1,x]
  return Math.floor(Math.random() * x) + 1;
};

export const GET_FIVE = "GET_FIVE";
export const GET_TOTAL = "GET_TOTAL";
export const SET_ERROR = "SET_ERROR";
export const ADD_COMIC = "ADD_COMIC";
export const NOT_WAITING = "NOT_WAITING";
export const REMOVE_COMIC = "REMOVE_COMIC";
export const getComics = () => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: "" });
  dispatch({ type: GET_TOTAL });
  fetch("http://xkcd.com/info.0.json")
    .then((res) => {
      res.json().then((resJson) => {
        console.log("Got latest: ", resJson);
        dispatch({ type: GET_FIVE });
        for (let i = 0; i < 5; i++) {
          fetch(`http://xkcd.com/${getRand(resJson.num)}/info.0.json`)
            .then((resp) => {
                resp.json().then(respJson => {
                    console.log("Got comic: ", respJson);
                    dispatch({ type: ADD_COMIC, payload: respJson });
                    i === 4 && dispatch({ type: NOT_WAITING });
                })
            })
            .catch((er) => {
              console.error(
                "Error fetching comic # ",
                res.datanum,
                " Error: ",
                er
              );
              dispatch({
                type: SET_ERROR,
                payload: "Error fetching more comics.",
              });
            });
        }
      });
    })
    .catch((err) => {
      console.error("Error fetching latest comic, error: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching latest comic." });
    });
};
export const deleteComic = (id) => (dispatch) => {
  dispatch({ type: REMOVE_COMIC, payload: id });
};
