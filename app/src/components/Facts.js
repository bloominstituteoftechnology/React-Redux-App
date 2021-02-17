import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFact } from '../actions';

const Facts = ({ fact, isFetching, error, getFact }) => {
    useEffect(() => {
        getFact();
    }, []);

    const handleClick = () => {
        // debugger;
       getFact();
    };

    if (error) {
        return <h2>All I have to say is: {error}</h2>
    }
    if (isFetching) {
        return <h2>Grabbing a Random Fact!</h2>
    }

    return (
        <>
            <h2>Random Fact: <br/>{fact} </h2>
            <button onClick={handleClick}>
                Get New Fact
            </button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getFact })(Facts);