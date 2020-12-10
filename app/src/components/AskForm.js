import react from 'react';
import { connect } from 'react-redux';

import { getAnswer } from '../actions/askAction'; 


const AskForm = ({ answer, isFetching, error, getAnswer }) => {

    if (error) {
        return <h2>I DO NOT KNOW THE ANSWER, TRY AGAIN LATER...</h2>;
    }
    if (isFetching){
        return <h2>I'M THINKING...</h2>;
    }
    
    const handleClick = () => {
        getAnswer();
    }

    return(
        <div className="form">
            <div className="question">
                <input
                className="askQuestion"
                type="text"
                name="askQuestion"
                />
                <button onClick={handleClick}>Ask!</button>
             </div>

            <div className="answer">
                <h2>THE ANSWER IS: {answer}</h2>
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        answer: state.answer,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getAnswer})(AskForm)