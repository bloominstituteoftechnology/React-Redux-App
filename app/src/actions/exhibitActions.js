import axios from 'axios';

export const FETCH_EXHIBIT_START = 'FFETCH_EXHIBIT_START';
export const FETCH_EXHIBIT_SUCCESS = 'FETCH_EXHIBIT_SUCCESS';
export const FETCH_EXHIBIT_FAIL = 'FETCH_EXHIBIT_FAIL';

export const fetchData = () => dispatch => {

    dispatch({ type: FETCH_EXHIBIT_START });
    setTimeout(() => {
        axios
        .get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=4f8a6b0377385afdd6d94d36e621d948&query=digital')
        .then(res => {
            const data = res.data.objects
          dispatch({ type: FETCH_EXHIBIT_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: FETCH_EXHIBIT_FAIL, payload: err }))
    }, 3000);
  };

