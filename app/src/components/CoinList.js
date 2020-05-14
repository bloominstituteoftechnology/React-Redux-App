import React from 'react';
import { connect } from 'react-redux';

import Coin from './Coin';

const CoinList = props => {
    return (
        <div className='list-container'>
            <h3>Top 100 Cryptocurrencies</h3>
            {/* {props.} */}

        </div>
    );
};

export default connect(mapStateToProps, {})(CoinList);