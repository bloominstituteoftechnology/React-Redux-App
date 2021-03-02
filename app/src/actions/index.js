// import axios from 'axios';

// export const GET_ANIMAL = "GET_ANIMAL";




// export const getAnimal = () = (dispatch) => {
//   // update state to loading
//   dispatch({ type: FETCHING_ANIMAL_START });

//   // begin API request
//   axios.get('/api/v3/country/getspecies/:country?token='YOUR TOKEN'')

//   // respond to happy path & sad path, updating state with API response
//     .then(res => {
//       console.log("res: ", res);
//       dispatch({type: FETCHING_ANIMAL_SUCCESS, payload: res.data.animal })
//     })
//     .catch(err => {
//       console.log("error: ", err)
//     })
// }