import { GET_SPECIES, FETCH_SPECIES_START, FETCH_SPECIES_SUCCESS, FETCH_SPECIES_FAILURE } from '../actions/index';

// Define initial state
// const initialState = {
//   editing: false,
//   loading: false,
//   error: "",
  
// }

const initialState = {
  speciesList: [
    "orca", 
    "minke", 
    "gray whale", 
    "humpback", 
    "atlantic white-sided dolphin", 
    "pacific white-sided dolphin", 
    "dalls porpoise", 
    "harbor porpoise", 
    "harbor seal", 
    "northern elephant seal", 
    "southern elephant seal", 
    "california sea Lion", 
    "steller sea lion", 
    "sea otter", 
    "other", 
    "unknown"
  ],

}

export const appReducer = (state = initialState, action) => {

};


 


