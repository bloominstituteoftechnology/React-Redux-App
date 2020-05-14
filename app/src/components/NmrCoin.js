import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNumeraire, fetchTop100 } from '../store/actions';

const NmrCoin = ({ isFetching, nmrPrice, fetchNumeraire, fetchTop100 }) => {

    useEffect(() => {
        fetchNumeraire();
    }, [fetchNumeraire]);

    // useEffect(() => {
    //     fetchTop100();
    // }, [fetchTop100]);

    return (
        <main>
            <h1>Numeraire Real-Time Price</h1>

            {console.log('NmrCoin.js: isFetching is: ', isFetching)}

            {isFetching && <h3>Fetching data...</h3>}
            {!isFetching && nmrPrice && (
                <div>
                    <h3>Price: ${nmrPrice}</h3>
                </div>
            )}
        </main>
    );
};

const mapStateToProps = state => {
    console.log('NmrCoin.js mSTP is running...', state);

    return {
        isFetching: state.coin.isFetching,
        nmrPrice: state.coin.nmrPrice
    };
};

export default connect(mapStateToProps, { fetchNumeraire, fetchTop100 })(NmrCoin);