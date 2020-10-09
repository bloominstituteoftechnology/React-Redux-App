import { FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_FAILURE } from "./actions";

export const initialstate = {
    image:"https://images.dog.ceo/breeds/labrador/IMG_6236.JPG"
  };

export const Myreducer = (state=initialstate, action) =>{
    switch(action.type){
        case FETCH_DOG_SUCCESS:
            return{
                ...state,
                image: action.payload.message
            }
        default:
            return {...state}
    }
}