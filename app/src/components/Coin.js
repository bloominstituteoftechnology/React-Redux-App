import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNumeraire } from '../store/actions';

const Coin = ({ isFetching, nmrPrice, fetchNumeraire }) => {

    useEffect(() => {
        fetchNumeraire();
    }, [fetchNumeraire]);

    return (
        <main>
            <h1>Numeraire Real-Time Price</h1>
            {console.log('Coin.js: isFetching is: ', isFetching)}
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
    console.log('Coin.js mSTP is running...', state);

    return {
        isFetching: state.nmr.isFetching,
        nmrPrice: state.nmr.nmrPrice
    };
};

export default connect(mapStateToProps, { fetchNumeraire })(Coin);