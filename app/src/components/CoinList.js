import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import NmrCoin from './NmrCoin';
import Coin from './Coin';
import { fetchTop100 } from '../store/actions';

const CoinList = ({ coinList, isFetching, fetchTop100 }) => {

    useEffect(() => {
        fetchTop100();
    }, [fetchTop100]);

    return (
        <div className='list-container'>
            {isFetching && <h3>Fetching data...</h3>}
            {coinList.length ? (
                // <ol type="1">
                <>
                    {coinList.map(coin => (
                        <Coin key={coin.id} coin={coin} />
                    ))}
                </>
                /* </ol> */
            ) : (
                <p>Coin data is not available at this time</p>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    console.log('CoinList.js mSTP is running...', state);
    // {state.coin.coinList && console.log(state.coin.coinList[0])}

    return {
        coinList: state.coin.coinList,
        isFetching: state.coin.isFetching
    };
};

export default connect(mapStateToProps, { fetchTop100 })(CoinList);