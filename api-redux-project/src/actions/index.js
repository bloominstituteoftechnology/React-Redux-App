const IS_LOADING = "IS_LOADING";

const DATA_LOADED = "DATA_LOADED";

const DATA_ERROR = "DATA_ERROR";


export const loadAoeData = (civName) => (dispatch) =>{
    dispatch({
        type:IS_LOADING
    });
}