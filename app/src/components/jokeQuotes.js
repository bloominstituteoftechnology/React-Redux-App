import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../store/actions/quoteActions";

const JokeQuotes = props => {
    useEffect(() => {
        // call an action creator
        props.fetchQuote();
      }, []);

    return (
        <div>
            <h1 className="mainTitle">Laugh or Live: </h1>
            {/* {props.isFetching && </h1>} */}
            {props.quote && <h2 className="quoteClass">"{props.quote}"</h2>}
            {props.error && <p>{props.error}</p>}
            <button className="buttonClass" onClick={props.fetchQuote}>Fetch a new joke</button>
        </div>
    )
}

const mapToStateProps = state => {
    // console.log(state)
    return {
    isFetching: state.jokes.isFetching,
    error: state.jokes.error,
    quote: state.jokes.quote
    }
}

export default connect(mapToStateProps, {fetchQuote})(JokeQuotes);
