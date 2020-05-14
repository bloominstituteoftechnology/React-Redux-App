import React from 'react';

const Coin = props => {

    var nf = new Intl.NumberFormat();

    return (
            <div className='coin-container'>  
                <h2>
                    {props.coin.name}
                </h2>
                <span> </span>
                {props.coin.image ? <img src={`${props.coin.image}`}/> : null}
                <span> </span>
                <h3>Current Price: ${nf.format(props.coin.current_price)}</h3>
                <span> </span>
                <h3>Market Capitalization: ${nf.format(props.coin.market_cap)}</h3>
            </div>
    );
};

export default Coin;