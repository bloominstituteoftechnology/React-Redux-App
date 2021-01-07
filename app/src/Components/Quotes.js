import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../Actions/actions';

const Quote = ({ title, quote, isFetching, error }) => {
     useEffect(() => {
        fetchQuote();
    }, []);

    if (isFetching) {
        return <h2>Loading</h2>
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>Chuck says...{quote}</h2>
                <button onClick={fetchQuote} className='submit'>Get new Fact</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('mapstatetoprops, state:', state);
    return {
        quote: state.quote,
        title: state.title,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);