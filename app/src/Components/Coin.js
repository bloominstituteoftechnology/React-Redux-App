import React from 'react'
import './Coin.css'

export const Coin = (props) => {


    return (

        <div className='coin-main-container'>
            <h1 className='coin-header-name'>{props.coin.name}</h1>
            <h3 className='coin-header-symbol'>{props.coin.symbol}</h3>
            <div className='coin-header-rank'>Rank: {props.coin.rank}</div>
        </div>


    )


}