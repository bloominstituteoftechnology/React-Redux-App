import React from 'react';
import ChosenPlayer from './chosenPlayer';

const ChosenPlayers = (props) => {
	return(
		<div className="container">
			<h4>Chosen players</h4>
			{props.players.length ? (
				<div className="chosen-list">
				{props.players.map(item=> (
					<ChosenPlayer key ={item.id} player={item} removePlayer={props.removePlayer} />
					))}
				</div>
				) : (<h3>No Players Selected!</h3>)}
		</div>
		)
}

export default ChosenPlayers;