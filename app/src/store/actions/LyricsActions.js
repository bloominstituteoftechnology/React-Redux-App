import axios from "axios"



export const fetchLyric = () => {
    return dispatch  => {
        dispatch({ type: "FETCH_LYRIC_START"})
        axios
            .get('https://api.lyrics.ovh/v1/Coldplay/Adventure-of-a-Lifetime')
            .then(res => {
                dispatch( {type: 'FETCH_LYRIC_SUCCESS', payload: res.data.lyrics} )
            })
            .catch(err => console.log(err.response))
    };
};
