import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../actions'

const Cards = ({ card, isFetching, err, getCards }) => {
    useEffect(() => {
        getCards()
        }, [])
    console.log(card)
    if(err) {
        return <h2>ERROR: {err}</h2>
    }
    if(isFetching) {
        return <h2>Untapping Cards...</h2>
    }

    const handleClick = () => {
        getCards()
    }

    return(
        <div key={card.id}>
            {card}
        <button onClick={handleClick}>Get More Cards</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        card: state.card,
        cardName: state.card.name,
        cardCost: state.card.ManaCost,
        cardColor: state.card.colors,
        cardType: state.card.types,
        cardSet: state.card.set,
        cardArt: state.card.imageURL,
        cardID: state.card.id,
        isFetching: state.isFetching,
        error: state.error
        }
}

export default connect(mapStateToProps, {getCards})(Cards)