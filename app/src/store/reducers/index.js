import { combineReducers } from 'redux'
import { pexelsReducer } from './pexelsReducer'
import { weatherReducer} from "./weatherReducer"
import { formReducer } from './formReducer'
import { masterReducer } from './appReducers'

export default combineReducers({masterReducer})