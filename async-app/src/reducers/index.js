import reducer from './fetchData';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    data: reducer,
    user: userReducer
})



export default reducers;