export const UPDATE_FILM = "UPDATE_FILM";
export const ADD_FILM = "ADD_FILM";
export const TOGGLE_WATCHED = "TOGGLE_WATCHED";

export function updateFilm(NewFilm) {
  console.log("action", newFilm);
  return (type: UPDATE_FILM), (payload: newFilm);
}

export function addFilm(AddFilm) {
  console.log("action", addFilm);
  return (type: ADD_FILM), (payload: addFilm);
}

export function toggleWatched(index) {
  console.log("action", index);
  return (type: TOGGLE_WATCHED), (payload: index);
}
