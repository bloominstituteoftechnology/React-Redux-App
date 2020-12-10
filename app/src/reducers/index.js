import { combineReducers } from 'redux'
import reducer from './cardReducer'

export default combineReducers({
    items: reducer()
})