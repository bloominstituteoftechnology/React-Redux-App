import { combineReducers } from "redux";
import { rocketsReducer as rockets } from "./rocketsReducer";
import { infoReducer as info } from './infoReducer';
import { historyReducer as history } from './historyReducer';
import { missionsReducer as missions } from './missionsReducer';

export default combineReducers({
  rockets,
  info,
  history,
  missions
});