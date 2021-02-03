import './App.css';

import { connect } from "react-redux";

import { getFilms } from './actions';

const App = ({ films, isFetching, error, ...props }) => {

  const handleGetFilms = e => {
    e.preventDefault();
    props.getFilms();
  }

  return (
    <div className="App">
      <h1>Studio Ghibli Films: </h1>
      <p>{films}</p>
      <p>{error}</p>
      <button onClick={handleGetFilms} >Fetch Films</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    films: state.films,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFilms })(App);
