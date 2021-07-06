import React from 'react';
import { connect } from 'react-redux';

const BeerList = props => {
    return (
        <div>
            {props.error ? (
                <div className='error'>{props.error}</div>
            ) : (
                props.beers.map(beer => <div>{beer.name}</div>)
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        beers: state.beers,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    {}
)(BeerList);
