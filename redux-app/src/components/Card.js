import React, { useEffect } from 'react'

const Card = (props) => {
	return (
		<div className="card">
			<div className="card-img">
				<img src={props.card.imageUrl} />
			</div>
			<div className="card-info">
				<h2 key={props.card.card_id}>{props.card.name}</h2>
				<h5> {props.card.originalType} </h5>
				<p> {props.card.text} </p>
				<p> {props.card.flavor} </p>
			</div>
		</div>
	)
}
export default Card
