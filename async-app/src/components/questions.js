import React from 'react';

const Questions = (props) => {
    return(
        <div>
            {console.log(props)}
            {props.state.questions.map(item => 
                <div key={Date.now()}>
                <p>{item.question}</p>
                </div>
            )}
        </div>
    );
}
export default Questions;