import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import { getGames } from "./actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);
  const games = useSelector((state) => state.games);

  return (
    <div className="App">
      <div className="card-container">
        {games.map((game) => {
          return (
            <div className="game-card">
              <h2 className="game-title">{game.title}</h2>
              <img alt="cover" src={game.thumb}></img>
              <div className="price">
                <p>{`Regular Price: ${game.normalPrice}`}</p>
                <p>{`Sale Price: ${game.salePrice}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
