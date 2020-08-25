const initialState = {
    confirmedCases: '',
    recoveredCases: '',
    deaths: '',
    isFetching: false,
    date: '',
    error: ''
}

export const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_CASES_START': 
        return{
            ...state,
            isFetching: true
        }

        case 'FETCH_CASES_SUCCESS':
            return{
                ...state,
                isFetching: false,
                confirmedCases: action.payload.confirmed.value,
                recoveredCases: action.payload.recovered.value,
                deaths: action.payload.deaths.value,
                date: new Date(action.payload.lastUpdate).toDateString()
            }
            default:
                return state;
    }
}