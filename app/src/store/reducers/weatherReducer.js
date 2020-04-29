const initialState = {
    userEntry: "",
    weatherData:"http://api.openweathermap.org/data/2.5/weather?appid=f9039d5e70b79bc54e8913e14e31a84f&q=new%20york%20city&units=imperial",
}

export const weatherReducer = ( state =  initialState, action ) => {
    switch(action.type) {
        default :
        return state
    }
}