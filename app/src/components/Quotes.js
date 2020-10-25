import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../reducers/actions';
import Button from 'react-bootstrap/Button';

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    if (isFetching) {
        return <h2>Fetching a quote now</h2>
    }
    return (
        <div>
            <h2> {quote}</h2>
            <Button variant="warning" size="lg" block onClick={getQuote}>Get new quote</Button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, 
    { getQuote }
    )(Quotes);