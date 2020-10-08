// create initialState
const initialState = {

   isFetching: false, // if true, loading image appear
   pokemonList: [],

}

export const pokeReducer = (state = initialState, action) => {

   switch(action.type){

      case 'FETCH_JOBS_START':
         return {
            ...state,
            isFetching: true
         }
      
      case 'FETCH_JOBS_SUCCESS':
         return {
            ...state,
            isFetching: false,
            pokemonList: action.payload,
         }
      
      default: 
         return state
   }

}