import axios from "axios";

export const jokeLoader = () => dispatch => {
  dispatch({ type: 'COLLECTING_FUNNY_STUFF' });
  axios
    .get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            console.log(res)
      //res.data ==> activity
      dispatch({ type: 'FUNNY_STUFF_ARRIVED', payload: res.data });
    })
    .catch(err => console.log(err));
};
