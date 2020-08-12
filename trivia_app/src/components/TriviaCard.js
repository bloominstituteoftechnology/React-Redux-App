import React from 'react'

// joiners // 
import { connect } from 'react-redux'; 

const TriviaCard = (props) => {
    return (
        <div>
            {props.isLoading ? <h3>Your questions are loading...</h3> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results, 
        isLoading: state.isLoading, 
        error: state.error
    }
}

export default connect(mapStateToProps, {})(TriviaCard); 

// trivia card will use a ternary to display the answer when clicked? 
