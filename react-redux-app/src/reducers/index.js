import { combineReducers } from 'redux';
import { catImageReducer } from './catImageReducer.js';
import { catFactReducer } from './catFactReducer.js';

export default combineReducers({
    image: catImageReducer,
    fact: catFactReducer,
});