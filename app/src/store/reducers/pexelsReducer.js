const initialState = {
    userEntry: "new york city",
    cityImage:"https://pixabay.com/get/52e0d4464356a914f1dc84609629337d1238dee55b4c704c7d277adc9f4cc258_640.jpg",
    isFetching: false,
    error:"",
    altImageInfo:"New York City, 1890, vintage"
}

export const pexelsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}