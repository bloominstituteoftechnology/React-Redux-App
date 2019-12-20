import React from 'react';
import {useSelector} from 'react-redux';
import he from 'he';
import Loader from 'react-loader-spinner';


const Questions = (props) => {
    // const correctAnswer = useSelector(state => state.data.questions[0].correct_answer);
    // console.log(correctAnswer);
    
    const displayType = (type) => {
        switch (type){
            case 'multiple':
                return 'Multiple Choice Question'
            case 'boolean':
                return 'True of False'
            default:
                return 'Type Unkown'
        }
    };
    const getAwnsers = aws => {
        let awnserArray = [aws.correct_answer, ...aws.incorrect_answers];
        console.log(awnserArray);
        for(let i = awnserArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = awnserArray[i]
            awnserArray[i] = awnserArray[j]
            awnserArray[j] = temp
          }

        console.log(`shuffled Array: ${awnserArray}`);
          return awnserArray;
    };
    const handleAwn = (e) => {
        
        
            return props.state.checkAwnser(e.target.innerText,he.decode(props.state.data.questions[0].correct_answer));
        
    }
    
    return(
        <div>
            {!props.state.data.isFetching && props.state.data.questions.length < 1 && <p>Load a Question!</p>} 
             {props.state.data.isFetching && <p>Loading Question! </p>}
            {props.state.data.isFetching && ( 
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      )}
            
            {props.state.data.questions.map(item => 
                
                <div key={Date.now()}>
                    <div>
                        <h3>{displayType(item.type)}</h3>
                        <p>{he.decode(item.question)}</p>
                    </div>
                    <div>
                        
                        {/* {item.type === 'multiple' && <button>{he.decode(item.correct_answer)}</button>} */}
                        {item.type === 'multiple' && getAwnsers(item).map((item,index) => {
                            if(item !== null){
                            
                                return <button onClick={(e) => handleAwn(e)} key={Date.now() + index}>{he.decode(item)}</button>
                            }
                                return <h1>Error</h1>   
                        })}
                        {item.type === 'boolean' && <div>
                        {console.log(item.correct_answer)}
                            <button onClick={(e) => handleAwn(e, item.correct_answer) } name='True' id='true'>True</button>    
                            <button onClick={(e) => handleAwn(e, item.correct_answer) } name='False' id='false'>False</button>
                        </div>}
                    </div>
                </div>
                
            )}
            
        </div>
    );
}
export default Questions;