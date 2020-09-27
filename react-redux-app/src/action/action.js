import axios from 'axios';




export const getBreed = () =>{

    return dispatch => {
        

        dispatch({ type: 'FETCH_BREED_START'})
        axios 
            .get(`https://dog.ceo/api/breeds/list/all`)
            .then(res => {
            console.log('here is the res',res)
            dispatch({ type: 'FETCH_BREED_SUCCESS', payload: res.data.message });
        })
            .catch(err => {
                dispatch({ type: 'FETCH_BREED_FAILURE', payload: err.message});
            console.log('here is an error', err)
            });

};
      

};

export const getDogPic = (dogBreed) => {
    return dispatch => {
        dispatch({ type: 'FETCH_DOG_PIC_START'})
        axios
            .get(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then(res => {
                console.log('here is the res',res)
                dispatch({ type: 'FETCH_DOG_PIC_SUCCESS', payload: res.data.message });
            })
                .catch(err => {
                    dispatch({ type: 'FETCH_DOG_PIC_FAILURE', payload: err.message});
                console.log('here is an error', err)
                });
    }
}
