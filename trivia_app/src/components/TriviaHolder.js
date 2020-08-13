import React, { useEffect } from 'react'
// joiners // 
import { connect } from 'react-redux'; 
// dev-made
import { fetchTrivia } from '../actions/triviaActions'
import TriviaCard from './TriviaCard'; 
// style
import Grid from '@material-ui/core/Grid'; 
import Button from '@material-ui/core/Button'


const TriviaHolder = (props) => {

    const { isLoading, error, questions } = props; 

    useEffect(() => {
        props.fetchTrivia(); 
    }, []);

    const onClick = e => {
        props.fetchTrivia(); 
    }

    return (
        <div>
            {isLoading ? <h3>Your questions are loading...</h3> : null}
            {error ? <h3>Oh no, you don't get any questions <span>😞</span></h3> : null}
            {/* {questions.length > 0 ? (<div>{questions.map((question) => 
                (<TriviaCard question={question.question}/>))}</div>) : null} */}

            {questions.length > 0 ? (
                <div>
                    <Button style={{ margin: 5 }}
                    onClick={onClick} 
                    size="medium" 
                    variant="contained" 
                    color="secondary"
                    >
                        More Trivia!
                    </Button>
                    <Grid container 
                    spacing={20} 
                    style={{ padding: 20, justifyContent: 'center' }}
                    >
                        
                        {questions.map(question => (
                            <Grid item style={{ width: '18vw', margin: 2 }}>
                                <TriviaCard 
                                question={question.question} 
                                answers={question.answers} 
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : null }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions, 
        isLoading: state.isLoading, 
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchTrivia })(TriviaHolder); 

// trivia card will use a ternary to display the answer when clicked? 
