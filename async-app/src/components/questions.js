import React from 'react';
import he from 'he';


const Questions = (props) => {
    return(
        <div>
            {console.log(props)}
            {props.state.questions.map(item => 
                <div key={Date.now()}>
                <p>{he.decode(item.question)}</p>
                </div>
            )}
        </div>
    );
}
export default Questions;