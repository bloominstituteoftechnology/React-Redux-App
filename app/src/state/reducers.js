import * as types from './actionTypes';
const initialDoggos = [];
export const doggosReducer = (state = initialDoggos, action) => {
	switch (action.type) {
		case types.SET_DOGGOS:
			return action.payload;
		default:
			return state;
	}
}
const initialKittens = [];
export const kittensReducer = (state = initialKittens, action) => {
	switch (action.type) {
		case types.SET_KITTENS:
			return action.payload;
		default:
			return state;
	}
}