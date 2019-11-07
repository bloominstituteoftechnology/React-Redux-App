export const ANIME_LOADING = "ANIME_LOADING";
export const ANIME_SUCCESS = "ANIME_SUCCESS";
export const ANIME_FAIL = "ANIME_FAIL";

export const animeLoading = () => ({ 
    type: ANIME_LOADING 
});

export const animeLoadSuccess = data => ({
    type: ANIME_SUCCESS,
    payload: data
});

export const animeLoadFailure = error => ({
    type: ANIME_FAIL,
    payload: error
});

export function fetchAnime() {
 
  return function(dispatch) {
   
    dispatch(animeLoading());


    return fetch(`https://api.jikan.moe/v3/anime/1/news`)
    
      .then(response => response.json())
      .then(json =>
        
        dispatch(animeLoadFailure(json.articles))
        
        
      )
      .catch(error => dispatch(animeLoadFailure(error)));
  };
}
