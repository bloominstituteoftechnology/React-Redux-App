import axios from "axios"


export const FETCH_DOGS_START ="FETCH__DOGS_START"
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS"
export const FETCH_DOGS_FAILURE = "FETCH_DOGS_FAILURE"
export const getDogData = () =>dispatch=>{

    dispatch({type:FETCH_DOGS_START})
        console.log(FETCH_DOGS_START)
   axios.get('https://dog.ceo/api/breeds/image/random/12')
      .then((res)=>{
        //   console.log(res.data)
          dispatch({type:FETCH_DOGS_SUCCESS, payload:res.data})

      })
          
      .catch((err)=> {
          dispatch({type:FETCH_DOGS_FAILURE, payload:err.message})
      })

}

