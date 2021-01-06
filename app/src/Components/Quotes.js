import React from 'react';
import { connect } from 'react-redux';

const Quote = ({ title, quote, isFetching, error }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Kanye says...</h2>
            <button>Get New Quote</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('mapstatetoprops, state:', state);
    return {
        joke: state.joke,
        title: state.title,
        isFetching: state.isFetching,
        error: error
    }
}

const mapDispatchToProps = { fetchQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);