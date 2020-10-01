import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCards, fetchNewCards } from '../store'
import Card from './Card'
const Cards = (props) => {
	useEffect(() => {
		props.fetchCards()
	}, [])
	return (
		<div>
			{props.isLoading ? <h4>Loading cards...</h4> : null}
			{props.error ? (
				<p style={{ color: 'red' }}> Uh oh... {props.error}</p>
			) : null}
			{props.cards.length > 0 ? (
				<div className="card-cont">
					{props.cards.map((card) => {
						return <Card card={card} />
					})}
				</div>
			) : null}
			<button onClick={() => props.fetchNewCards(props.page)}>Next Page</button>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isLoading: state.isLoading,
		error: state.error,
		page: state.page,
	}
}

export default connect(mapStateToProps, { fetchCards, fetchNewCards })(Cards)
