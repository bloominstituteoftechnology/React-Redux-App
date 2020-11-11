import { FETCH_PLAYER, FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, addPlayer, removePlayer, ADD, REMOVE} from '../actions/players';



const initialState = {
	players: null,
	isLoading: false,
	error: null,
	chosenPlayers:[]
}


export function reducer(state=initialState, action) {
	let selectedPlayers = []
	switch(action.type){
		case FETCH_PLAYER:
			return {
				...state,
				isLoading: true
			}
		case FETCH_PLAYER_SUCCESS:
			return{
				...state,
				players: action.payload,

				isLoading: false
			}
		case FETCH_PLAYER_ERROR:
			return{
				...state,
				isLoading:false,
				error: action.payload
			}
		case ADD:
			return{
				...state,
				chosenPlayers: [...state.chosenPlayers, action.payload],
				players: state.players.filter(player => player.id !== action.payload.id)
			}
		case REMOVE:
			selectedPlayers = state.chosenPlayers.filter(player => player.id !== action.payload.id)
			return {
				...state,
				chosenPlayers: selectedPlayers,
				players: [...state.players, action.payload]
			}
			

		default:
			return state
	}
}