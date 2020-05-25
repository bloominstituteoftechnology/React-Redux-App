import {
  FETCH_DATA,
  UPDATE_CATS,
  SET_ERROR,
  FETCH_IMG_DATA,
  UPDATE_IMG,
  SET_IMG_ERROR,
} from "../actions";

const initialState = {
  breeds: [],
  isFetchingData: false,
  error: "",
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        breeds: [],
      };
    case UPDATE_CATS:
      console.log("cats i am here");
      return {
        ...state,
        breeds: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };

    case FETCH_IMG_DATA:
      // console.log("i am here FETCH_IMG_DATA");
      return {
        ...state,
        isFetchingData: true,
      };
    case UPDATE_IMG:
      console.log("i am here UPDATE_IMG");
      return {
        ...state,
        breeds: state.breeds.map((breed, index) => {
          console.log("breed", breed, "index", index);

          if (breed.id === action.payload[0]) {
            console.log("breed*****", breed);
            return {
              ...breed,
              image: action.payload[1],
              //isFetchingData: false,
            };
          } else return breed;
        }),
        isFetchingData: false,
      };
    case SET_IMG_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
