import axios from 'axios'

export const FETCHING_CARDS_START = 'FETCHING_CARDS_START'
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS'

export const fetchCards = () => (dispatch) => {
	dispatch({ type: FETCHING_CARDS_START })

	axios
		.get('https://api.magicthegathering.io/v1/cards?page=1&pageSize=10')
		.then((res) => {
			console.log(res)
			dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards })
		})
		.catch((err) => console.log(err))
}

export const fetchNewCards = (currentPage) => (dispatch) => {
	dispatch({ type: FETCHING_CARDS_START })

	axios
		.get(
			`https://api.magicthegathering.io/v1/cards?page=${
				currentPage + 1
			}&pageSize=10`
		)
		.then((res) => {
			console.log(res)
			dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards })
		})
		.catch((err) => console.log(err))
}

// redux-thunk
const thunk = (store) => (next) => (action) => {
	if (typeof action === 'object') {
		next(action)
	} else if (typeof action === 'function') {
		action(store.dispatch)
	}
}
