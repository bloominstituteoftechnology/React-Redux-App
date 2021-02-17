import axios from 'axios'


export const FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED'
export const FETCH_IMAGES_SUCCESS= "FETCH_IMAGES_SUCCESS"
export const FETCH_IMAGES_LOADING= "FETCH_IMAGES_LOADING"

export const getImages = () =>{
    return dispatch =>{
        dispatch(fetchImagesLoading())

        axios
            .get("https://dog.ceo/api/breed/germanshepherd/images/random/20")
            .then(response =>{
                dispatch(fetchImagesSuccess(response.data.message));
            })
            .catch(err =>{
                dispatch(fetchImagesFailed(err))
            })
    }
}

export const fetchImagesLoading = () =>{
    return{type:FETCH_IMAGES_LOADING}
}
export const fetchImagesSuccess = (images) =>{
    return{type:FETCH_IMAGES_SUCCESS,payload:images}
}

export  const fetchImagesFailed = () =>{
    return {type:FETCH_IMAGES_FAILED}
}