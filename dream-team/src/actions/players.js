import axios from 'axios';


export const FETCH_PLAYER = 'FETCH_PLAYER';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_ERROR = 'FETCH_PLAYER_ERROR' ;
export const ADD = "ADD";
export const REMOVE = "REMOVE";



export function getPlayer(){
	return (dispatch) => {
		dispatch({type: FETCH_PLAYER});

		axios.get("https://www.balldontlie.io/api/v1/players?per_page=100")
			.then((res)=>{
				console.log(res.data.data)
				dispatch({type:FETCH_PLAYER_SUCCESS, payload: res.data.data})
			})
			.catch((err)=>{
				dispatch({type:FETCH_PLAYER_ERROR, payload:err})
			})
	}
}


export function addPlayer (item){
	return{
		type: ADD,
		payload: item
	}
}

export function removePlayer (item){
	return{
		type: REMOVE,
		payload: item

	}
}