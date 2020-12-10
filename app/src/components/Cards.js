import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { getCards } from '../actions/index'

const Cards = ({ card, isFetching, err, getCards }) => {
    useEffect(() => {
    getCards()
        }, [getCards])
    if(err) {
        return <h2>ERROR: {err}</h2>
    }
    if(isFetching) {
        return <h2>Untapping Cards...</h2>
    }

    const handleClick = () => {
        getCards()
    }
 
 if (!this.state.cards === undefined) {
     <h2>Untapping your cards...</h2>
 }
 return this.state.cards.map(card => {
     return(
                <div key={card.id}>
                <h3>{card.name}</h3>
                <img src={card.imgURL} alt='magic card'/>
                <button onClick={handleClick}>Get More Cards</button>
            </div>
 )}
 )}


const mapStateToProps = state => {
    return {
        cards: state.card.cards,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, { getCards })(Cards)