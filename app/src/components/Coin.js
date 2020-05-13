import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchNumeraire } from '../store/actions';

const Coin = ({ isFetching, nmrPrice, fetchNumeraire }) => {

    useEffect(() => {
        fetchNumeraire();
    }, []);

    return (
        <main>
            <h1>Numeraire Real-Time Price</h1>
            {isFetching && <h3>Fetching data...</h3>}
            {!isFetching && nmrPrice && (
                <div>
                    <h3>Price: </h3>
                </div>
            )}
        </main>
    );
};

const mapStateToProps = state => {
    console.log(state);

    return {
        isFetching: state.isFetching,
        nmrPrice: state.nmrPrice
    };
};

export default connect(mapStateToProps, { fetchNumeraire })(Coin);