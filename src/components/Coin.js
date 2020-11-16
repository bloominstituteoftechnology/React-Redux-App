import React from 'react';

const Coin = props => {

    var nf = new Intl.NumberFormat();

    return (
            <div className='coin-container'>  
                <h2>
                    {props.coin.name} ({props.coin.symbol.toUpperCase()})
                </h2>
                <span> </span>
                <div className='image-container'>
                    {props.coin.image ? <img src={`${props.coin.image}`}/> : null}
                </div>
                <span> </span>
                <div className='data-container'>
                    <div className='current'>
                        <h3>Current Price: <span className='data'>${nf.format(props.coin.current_price)}</span></h3>
                        <span> </span>
                        <h3>Market Capitalization: <span className='data'>${nf.format(props.coin.market_cap)}</span></h3>
                    </div>
                    <div className='24h'>
                        {props.coin.price_change_percentage_24h && <h3>24h Percent Change: <span className='data'>{(props.coin.price_change_percentage_24h).toFixed(2)}%</span></h3>}
                        <span> </span>
                        {props.coin.market_cap_change_percentage_24h && <h3>Market Cap 24h Percent Change: <span className='data'>{(props.coin.market_cap_change_percentage_24h).toFixed(2)}%</span></h3>}
                    </div>
                </div>
            </div>
    );
};

export default Coin;