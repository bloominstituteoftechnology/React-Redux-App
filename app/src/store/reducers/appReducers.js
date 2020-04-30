const initialState = {
  cityName: "",
  cityImage:"",
  altImageInfo: "",
  temperature:"",
  feels_like:"",
  lowOf:"",
  highOf:"",
  description:"",
  isLoading:false,
  isImageLoading:false,
  error:"",
};

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        cityName: action.payload.cityName,
        
      };
    case "FETCH_WEATHER_DATA_START" :
        return {
            ...state,
            isLoading: true
        }
    case "FETCH_WEATHER_SUCESS":
        return {
            ...state,
            isLoading:false,
            cityName: action.payload.name,
            feels_like: action.payload.main.feels_like,
            highOf:action.payload.main.temp_max,
            lowOf:action.payload.main.temp_min,
            temperature:action.payload.main.temp
        }
    case "FETCH_WEATHER_DATA_FAILED":
        return {
            ...state,
            isLoading: false,
            error: action.payload.message
        }
    case "FETCH_PEXEL_IMAGE_START":
        return {
            ...state,
            isImageLoading:true
        }
    case "FETCH_PEXEL_IMAGE_SUCCESS" :
        return {
            ...state,
            isImageLoading:false,
            cityImage:action.payload.largeImageURL,
            altImageInfo:action.payload.tags,
        }
    
    default:
      return state;
  }
};
