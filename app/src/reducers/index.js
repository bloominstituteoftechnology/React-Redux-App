import { combineReducers } from 'redux';
import covidTracker from './covidTracker';
import covidTrackerTest from './covidTrackerTest';

export default combineReducers({
    covidTracker,
    covidTrackerTest
});