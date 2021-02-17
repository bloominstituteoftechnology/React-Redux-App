import axios from 'axios'

export const JOKE_IS_FETCHING ='JOKE_IS_FETCHING';
export const JOKE_SUCCESS_SETUP = 'JOKE_SUCCESS_SETUP'
export const JOKE_FAILED = 'JOKE_FAILED'



export const getJoke = () => {
    return dispatch => {
        dispatch({ type:JOKE_IS_FETCHING });

        axios
            .get('https://official-joke-api.appspot.com/random_joke')
            .then(res=>{
                console.log(res)
                dispatch({type:JOKE_SUCCESS_SETUP, payload:res.data})
                // dispatch({type:JOKE_SUCCESS_SETUP, payload:res.data.punchline});
            })
           
            .catch(err=>{
                dispatch({type:JOKE_FAILED, payload:err.Response.code})
            });
    }
}