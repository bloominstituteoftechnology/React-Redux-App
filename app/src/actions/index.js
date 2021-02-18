import axios from 'axios';

export const FETCH_MEAL = "FETCH_MEAL";
export const MEAL_SUCCESS = "MEAL_SUCCESS";
export const MEAL_FAIL = "MEAL_FAIL";


export const getMeal = () => dispatch => {
    dispatch(fetchMealLoading());

    axios
        .get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            dispatch({
                type: fetchMealSuccess,
                payload: {
                    name: res.data.strMeal,
                    category: res.data.strCategory,

                }
                });
            console.log(res.data.meals)
            
        })
        .catch(err=>{
            dispatch(fetchMealFail(err.response.code));
        });
}

export const fetchMealLoading = () => {
    return({ type:FETCH_MEAL});
}

export const fetchMealSuccess = (meal) => {
    return({type:MEAL_SUCCESS, payload:meal});
}

export const fetchMealFail = (error) => {
    return({type:MEAL_FAIL, payload:error});
}
