const initialState = {
    civilizations: [],
    isLoading: false,
    error: ""
}
//https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations


const reducer = (state=initialState,action) =>{
    console.log('ol: reducers: index.js : state,action',state,action)
}


export default Reducer;