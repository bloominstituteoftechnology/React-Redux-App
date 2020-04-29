import { combineReducers } from 'redux'
import { pexelsReducer } from './pexelsReducer'
import { weatherReducer} from "./weatherReducer"

export default combineReducers({pexelsReducer, weatherReducer})