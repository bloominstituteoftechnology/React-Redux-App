import axios from "axios";

export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS="DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR="DATA_LOAD_ERROR";


export const loadDataForLocation = (location) =>(dispatch)=>{
  //transition to isLoadingState  
  dispatch({type:IS_LOADING});
  console.log(`make your axios call`)
  setTimeout(() =>{
  axios
  .get(`https://ghibliapi.herokuapp.com/films`)
  .then((res) =>{
      console.log(`KH: acions.js loadDataForLocation axios:good`, res)
      dispatch({type: DATA_LOAD_SUCCESS,payload:res.data.all})
  })
  .catch(err =>{
      console.log(`KH acions.js loadDataForLocation axios bad`, err)
      dispatch({type:DATA_LOAD_ERROR, payload: `error fetching data: ${err.message}`
    })
  })
}, 1500)
}


