import axios from 'axios';


export const GET_SCRIPTURE = 'GET_SCRIPTURE';
export const GET_SCRIPTURE_FAILURE = 'GET_SCRIPTURE_FAILURE'

export const getScripture = () => dispatch => {
    axios 
        .get('https://api.scripture.api.bible/v1/bibles/f72b840c855f362c-04/passages/jhn.1?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false', 
            { headers: {
              'api-key': '15031d076b0791b503e9c13b013e5a39'
                }
            })
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_SCRIPTURE, payload: res.data.data.content})
        })
        .catch(err => {
            dispatch({
                type: GET_SCRIPTURE_FAILURE,
                payload: 'Could not load scripture.'
            })
        })
}