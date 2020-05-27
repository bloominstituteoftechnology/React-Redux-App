import Axios from "axios";

export const FETCH_SORTINGHAT_START = "FETCH_SORTINGHAT_START";
export const FETCH_SORTINGHAT_SUCCESS = "FETCH_SORTINGHAT_SUCCESS";
export const FETCH_SORTINGHAT_FAIL = "FETCH_SORTINGHAT_FAIL";

export const getHouse = () => dispatch => {
    dispatch({ type: FETCH_SORTINGHAT_START });
    Axios
    .get('https://www.potterapi.com/v1/sortinghat?key=$2a$10$viL1vqiysuXsxx4vUsTzb.LdGyEtE8WpRbKz8Mea6NxnLLPlT4ZPC')
        .then(res => 
            dispatch({ type: FETCH_SORTINGHAT_SUCCESS, payload: res.data.results })
        )
        .catch(err => dispatch({ type: FETCH_SORTINGHAT_FAIL, payload: err}));
};
