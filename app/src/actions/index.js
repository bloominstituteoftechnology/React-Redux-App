import axios from "axios";

const headers = {
	Accept: "application/json"
}

export const fetchRecipe = () => (dispatch) => {
	dispatch({ type: "FETCHING_RECIPE_START" });


axios.get("https://api.punkapi.com/v2/beers/random", { headers: headers })
.then(res => {
	dispatch({type: "FETCHING_RECIPE_SUCCESS", payload: res.data[0]})
	//dispatch({type: "FETCHING_RECIPE_DESCRIPTION", payload: res.data[0].description})
	console.log(res);
})
.catch(err => {
	console.log(err);
	dispatch({type: "FETCHING_RECIPE_ERROR", payload: err.response.message})
})
}