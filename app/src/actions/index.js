import axios from 'axios';

export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const getShow = () => {
    return dispatch => {
        dispatch(fetchShowLoading());

        axios
            .get('https://api.jikan.moe/v3/search/anime?q=SwordArtOnline')
            .then(res => {
                dispatch(fetchShowSuccess(res.data.results[0]));
            })
            .catch(err => {
                dispatch(fetchShowFail(err));
            })
    }
}

export const fetchShowLoading = () => {
    return ({ type: FETCH_DATA_LOADING });
}
export const fetchShowSuccess = (data) => {
    return ({ type: FETCH_DATA_SUCCESS, payload: { title: data.title, episodes: data.episodes, image: data.['image_url'], score: data.score, synopsis: data.synopsis, rating: data.rated } });
}
export const fetchShowFail = (error) => {
    return ({ type: FETCH_DATA_FAIL, payload: error });
}
