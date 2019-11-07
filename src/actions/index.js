// Action type...
export const SUMMON_CHUCK_JOKE = "SUMMON_CHUCK_JOKE";
export const SUMMON_CHUCK_JOKE_APPROVED = "SUMMON_CHUCK_JOKE_APPROVED";
export const SUMMON_CHUCK_JOKE_REFUSED = "SUMMON_CHUCK_JOKE_REFUSED";

//Action creator
export const chuckJokeLoading = () => ({ type: SUMMON_CHUCK_JOKE });

export const chuckJokeLoadingSuccess = data => ({
  type: SUMMON_CHUCK_JOKE_APPROVED,
  payload: data
});

export const chuckJokeLoadingFailed = error => ({
  type: SUMMON_CHUCK_JOKE_REFUSED,
  payload: error
});

//fetch joke function
export function fetchChuckJoke(dispatch) {
  dispatch(chuckJokeLoading());

  //api call...
  return fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => dispatch(chuckJokeLoadingSuccess(data)))
    .catch(error => dispatch(chuckJokeLoadingFailed(error)));
}

// padded object
// window.myObj = {
//   categories: [],
//   created_at: "2016-05-01 10:51:41.584544",
//   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   id: "bBbgAhdWQqeTydX_nYnQBQ",
//   updated_at: "2017-12-29 19:52:23.239841",
//   url: "https://api.chucknorris.io/jokes/bBbgAhdWQqeTydX_nYnQBQ",
//   value:
//     "mortal kombat is not a video game, it is a home video of Chuck Norris's 5th birthday party"
// };
