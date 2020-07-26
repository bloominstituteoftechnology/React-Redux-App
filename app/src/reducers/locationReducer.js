import { FETCH_LOCATION } from '../actions/locationActions';

const initialState = {
    location: {
        title: 'NA', /* Name of the location */
        latt_long: '0, 0',
    }
};

export const locationReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LOCATION:
            break;
        default:
            return state;
    }
};