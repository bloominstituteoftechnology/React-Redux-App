import React, { useEffect } from 'react'
// joiners // 
import { connect } from 'react-redux'; 
// dev-made
import { fetchTrivia } from '../actions/triviaActions'
import TriviaCard from './TriviaCard'; 
// style
import Grid from '@material-ui/core/Grid'; 


const TriviaHolder = (props) => {

    const { isLoading, error, results } = props; 

    useEffect(() => {
        props.fetchTrivia(); 
    }, []);

    return (
        <div>
            {isLoading ? <h3>Your questions are loading...</h3> : null}
            {error ? <h3>Oh no, you don't get any questions <span>😞</span></h3> : null}
            {/* {results.length > 0 ? (<div>{results.map((result) => 
                (<TriviaCard question={result.question}/>))}</div>) : null} */}

            {results.length > 0 ? (
                <Grid container spacing={24} style={{ padding: 24 }}>
                    {results.map(result => (
                        <Grid item lg={4} xl={3}>
                                <TriviaCard question={result.question} answers={result.incorrect_answers} correctAnswer={result.correct_answer}/>
                        </Grid>
                    ))}
                </Grid>
            ) : null }
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

export default connect(mapStateToProps, { fetchTrivia })(TriviaHolder); 

// trivia card will use a ternary to display the answer when clicked? 
