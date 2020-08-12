import React from 'react'; 

const TriviaCard = (props) => {
    console.log(props)
    return(
        <div>
            <h3>{props.question}</h3>
            <ol>
                {/* {props.answers.map((answer) => (<li>{answer}</li>))} */}
            </ol>
        </div>
    )
}

export default TriviaCard; 