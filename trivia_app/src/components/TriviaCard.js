import React, { useEffect } from 'react'

// joiners // 
import { connect } from 'react-redux'; 

import { fetchTrivia } from '../actions/triviaActions'

const TriviaCard = (props) => {

    useEffect(() => {
        props.fetchTrivia(); 
    }, []);

    return (
        <div>
            {props.isLoading ? <h3>Your questions are loading...</h3> : null}
            {props.error ? <h3>Oh no, you don't get any questions <span>😞</span></h3> : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        results: state.results, 
        isLoading: state.isLoading, 
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchTrivia })(TriviaCard); 

// trivia card will use a ternary to display the answer when clicked? 
