import axios from "axios";

const FilmList = (props) => {
  const film = props.film;
  const setFilm = props.setFilm;

  axios
    .get(`https://ghibliapi.herokuapp.com/films`)
    .then((res) => {
      setFilm(res.data);
      console.log("success", film);
    })
    .catch((err) => console.log("error", err));
};

export default FilmList;
