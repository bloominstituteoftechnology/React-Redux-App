import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import kw from '../img/kw.png';
import Loader from 'react-loader-spinner';
import './kanyeQuote.css';

import { fetchQuote } from '../actions/index';

const KanyeQuote = (props) => {
    useEffect(() => {
        props.fetchQuote();
    }, []);

    return (
        <div>
            <h1>Your Very Own Kanye Quote!</h1>
            {props.isFetching && (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
            )}
            <h3 className="quote">"{props.quote}"</h3>}
            <button className="button" onClick={props.fetchQuote}><img className="image" src={kw} alt = 'Kanye West'/></button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isLoading,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchQuote }
    )(KanyeQuote);
