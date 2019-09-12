import axios from "axios";

export const FETCH_ADVICE_START = "FETCH_ADVICE_START";
export const FETCH_ADVICE_SUCCESS = "FETCH_ADVICE_SUCCESS";
export const FETCH_ADVICE_FAIL = "FETCH_ADVICE_FAIL";

export const getAdvice = () => dispatch => {
    //BEFORE WE MAKE OUR AXIOS CALL
    //TELLS OUR FINITE STATE MACHINE THAT WE ARE IN A LOADING STATE
    dispatch({ type: FETCH_ADVICE_START });
    axios
      //
      .get("https://api.adviceslip.com/advice")
      .then(res =>
        //TELL OUR APP TO TRANSITION TO A SUCCESSFUL STATE
        

        dispatch({ type: FETCH_ADVICE_SUCCESS, payload: res.data.results })
        
      )
      //TELLS OUR APP THAT THE CALLED FAILED AND WE NEED TO GO INTO AN ERROR STATE
      //SENDS INTERPOLATED STRING WITH MSG: 404 NOT FOUND
      .catch(err =>
        dispatch({
          type: FETCH_ADVICE_FAIL,
          payload: `${err.data} ${err.data}`
        })
      );
  };