import React, { useEffect } from 'react';
import {connect} from "react-redux";

import { getJoke } from "../actions";

const DadJokes = (props) => {
    useEffect(() => {
        props.getJoke();
    },[]);


    if(props.fetching) {
        return (
            <div className="joke-container">
                <p className="joke">Thinking of a great joke . . .</p>
            </div>
        );
    } else {
        return (
            <div>
                <div className="joke-container"><p className="joke">{ props.joke }</p></div>

                <div className="button-wrapper">
                    <div className="button" onClick={props.getJoke}>Another!</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        joke: state.dadJoke.joke,
        fetching: state.fetching,
        error: state.error,
    };
};

const mapDispatchToProps = { getJoke };

export default connect(mapStateToProps, mapDispatchToProps)(DadJokes);