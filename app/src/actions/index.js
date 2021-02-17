import axios from 'axios'

export const FETCH_IMG_LOADING = 'FETCH_IS_LOADING'
export const FETCH_IMG_SUCCESS = 'FETCH_IS_SUCCESS'
export const FETCH_IMG_FAIL = 'FETCH_IS_FAIL'

export const getImg = () => {
    return dispatch => {
        dispatch (fetchImgLoading())

        axios
        .get('https://foodish-api.herokuapp.com/api/')
        .then((res) => {
            console.log(res.data.image)
            dispatch(fetchImgSuccess(res.data.image))
        })
        .catch(err=>{
            console.log(err)
            dispatch(fetchImgFail(err.Response.code))
        })
    }
}

export const fetchImgLoading = () => {
    return ({type:FETCH_IMG_LOADING})
}

export const fetchImgSuccess = (img) => {
    return ({type: FETCH_IMG_SUCCESS, payload: img})
}

export const fetchImgFail = (error) => {
    return ({type: FETCH_IMG_FAIL, payload: error})
}