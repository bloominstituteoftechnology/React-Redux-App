import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../Actions/actions';

const Quote = ({ title, joke, isFetching, error }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Dad says...</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('mapstatetoprops, state:', state);
    return {
        joke: state.joke,
        title: state.title,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);