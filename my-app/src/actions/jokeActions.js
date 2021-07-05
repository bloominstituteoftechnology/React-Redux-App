import axios from "axios";

export const jokeLoader = () => dispatch => {
  dispatch({ type: COLLECTING_FUNNY_STUFF });
  axios
    .get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            console.log(res.data)
      //res.data ==> activity
      dispatch({ 
          type: FUNNY_STUFF_ARRIVED, payload: res.data,
          type: FUNNY_SETUP, payload: res.data.setup,
        //   type: FUNNY_PUNCHLINE, payload: res.data.punchline        
    });
    })
    .catch(err => console.log(err));
};
export const FUNNY_STUFF_ARRIVED = "FUNNY_STUFF_ARRIVED";
export const COLLECTING_FUNNY_STUFF = "COLLECTING_FUNNY_STUFF";
// export const FUNNY_PUNCHLINE = "FUNNY_PUNCHLINE";
export const FUNNY_SETUP = "FUNNY_SETUP"