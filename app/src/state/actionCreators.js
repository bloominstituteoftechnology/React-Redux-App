import axios from 'axios';
import * as types from './actionTypes';
export const setDoggos = (doggoList) => {
	return {
		type: types.SET_DOGGOS,
		payload: doggoList
	}
}
export const getDoggos = () => dispatch => {
	axios.get('https://random.dog/doggos')
		.then(({ data }) => {
			dispatch(
				setDoggos(
					data.filter(img => !img.includes('.mp4')).slice(0, 100)
				)
			);
		})
		.catch(err => console.error('Oh no! Where are all my doggos?', err))
}