import { SELECT_SPECIES, FETCH_SPECIES_START, FETCH_SPECIES_SUCCESS, FETCH_SPECIES_FAILURE } from '../actions/index';

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
  species: "orca",
  loading: false,
  error: "",
  sitings: [
    {
      id:"5a049b7e686f743ec5040000",
      species:"orca",
      quantity:"5",
      description:"Spotted from the Edmonds-Kingston ferry, near fishing boats.",url:"http://hotline.whalemuseum.org/sightings/5a049b7e686f743ec5040000",latitude:47.79953,
      longitude:-122.47996699999999,
      location:"",
      sighted_at:"2017-11-09T18:11:00Z",
      created_at:"2017-11-09T18:16:30Z",
      updated_at:"2017-11-14T22:20:45Z",
      orca_type:"unknown"
    },
  ],
}

// appReducer with all state management functions related to the species
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
      case SELECT_SPECIES:
          return { ...state, species: action.payload }
      case FETCH_SPECIES_START:
          return { ...state, loading: true }
      case FETCH_SPECIES_SUCCESS:
          return { ...state, loading: false, sitings: action.payload }
      case FETCH_SPECIES_FAILURE:
          return { ...state, loading: false, error: action.payload }
      default:
          // console.log("Error: unknown action type in App Reducer");
          return state;  
  }
};



