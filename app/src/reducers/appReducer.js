import { SELECT_SPECIES, FETCH_SPECIES_START, FETCH_SPECIES_SUCCESS, FETCH_SPECIES_FAILURE } from '../actions/index';


const initialState = {
  species: "gray whale",
  loading: false,
  error: "",
  sightings: [
    {
      id:"5a049b7e686f743ec5040000",
      species:"orca",
      quantity:"5",
      description:"This is a test",url:"http://hotline.whalemuseum.org/sightings/5a049b7e686f743ec5040000",latitude:47.79953,
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
  console.log("appReducer: ", action);
  switch (action.type) {
      case SELECT_SPECIES:
        console.log("select species fires from reducer");
          return { ...state, species: action.payload }
      case FETCH_SPECIES_START:
          console.log("fetch species start fires from reducer")
          console.log("log payload: ", action.payload)
          return { ...state, loading: true, species: action.payload }
      
      case FETCH_SPECIES_SUCCESS:
        console.log("fetch species success fires from the reducer")
          return { ...state, loading: false, sightings: action.payload }
      case FETCH_SPECIES_FAILURE:
        console.log("fetch species failure fires from reducer")
          return { ...state, loading: false, error: action.payload }
      default:
          console.log("Error: unknown action type in App Reducer", action.type);
          return state;  
  }
};



