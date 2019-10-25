import React from 'react';
import PlayerCard from './playerCard.js';





const PlayerList = (props)=>{
	console.log(props.players)
	  return (
    <div className="container">
		<h4>Available Players</h4>
      {props.players ? (
        <div className="card-wrapper">
          {props.players.map(item => (
            <PlayerCard key={item.id} player={item} addPlayer={props.addPlayer}/>
          ))}
        </div>
      ) : (
        <p>No players here!</p>
      )}
    </div>
  );
};




export default PlayerList;