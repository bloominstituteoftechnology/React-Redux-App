const initialState = {
  cityName: "",
  cityImage:
    "https://pixabay.com/get/52e0d4464356a914f1dc84609629337d1238dee55b4c704c7d277adc9f4cc258_640.jpg",
  altImageInfo: "New York City, 1890, vintage",
};

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        cityName: action.payload.cityName,
      };
    default:
      return state;
  }
};
