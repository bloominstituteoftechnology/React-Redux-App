import React, { useEffect } from 'react';
import './App.css';
import AnimeBoard from './components/AnimeBoard';
import { useSelector, useDispatch } from "react-redux";
import { fetchAnime } from "./actions/fetchActions";

const App = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const {loading, anime, watchlist} = state;
  console.log(anime)
  console.log("watch later", watchlist)

  useEffect(() => {
    dispatch(fetchAnime())
  }, []) 

  return (
    <div className="App">
      {anime.map((item) => {
        return  <AnimeBoard item={item}/>
      })}
    </div>
  );
}

export default App;
