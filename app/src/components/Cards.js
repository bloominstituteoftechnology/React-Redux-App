import React, { useEffect, Component} from 'react'
import { connect } from 'react-redux'
import { getCards } from '../actions/index'



class MagicCards extends Component {

    componentDidMount(){
        this.props.getCards()
    }

    render() {
const postedCards = this.props.cards.map(card => {
    return(
            <div key={card.id}>
                <h3>{card.name}</h3>
                <img src={card.imgURL} alt='magic card'/>
                <button>Get More Cards</button>
            </div>
 )})
     return(
     <div>
     <h1>2</h1>
     {postedCards}
     </div>
        )
    }
}


// const Cards = ({ card, isFetching, err, getCards }) => {
//     useEffect(() => {
//     getCards()
//         }, [getCards])
//     if(err) {
//         return <h2>ERROR: {err}</h2>
//     }
//     if(isFetching) {
//         return <h2>Untapping Cards...</h2>
//     }
//     return(
//         <div>
//         {this.state.card}
//         </div>
//     )
// }

const mapStateToProps = state => {
    return {
        cards: state.card.cards,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCards })(MagicCards)