import React from 'react'
import './Coin.css'
import { fetchCoinsSpecific } from '../actions/actions'
import { connect } from 'react-redux'

const upArrow = '▲'
const downArrow = '▼'


const Coin = (props) => {

    
    return (
        <div className='top-container'>
            <div onClick={() => {props.fetchCoinsSpecific(props.coin.id)}} className='coin-main-container'>
                <h1 className='coin-header-name'>{props.coin.name}</h1>
                <h3 className='coin-header-symbol'>{props.coin.symbol}</h3>
                <div className='coin-header-rank'>Rank: {props.coin.rank}</div>
                <div>{downArrow}</div>
            </div>
            <div className='details'>
                {props.coinsDetails && <p>Price: ${JSON.stringify(props.coinsDetails.quotes.USD.price)}</p>}
            </div>
        </div>

    )


}
const mapStateToProps = state => {

    return {
        
        isFetchingDetails: state.isFetchingDetails,
        coinsDetails: state.coinsDetails,
        errorDetails: state.errorDetails

    }

}

export default connect(mapStateToProps,{ fetchCoinsSpecific })(Coin)