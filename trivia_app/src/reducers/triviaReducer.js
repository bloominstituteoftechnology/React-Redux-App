import { FETCH_TRIVIA_START, FETCH_TRIVIA_SUCCESS } from '../actions/triviaActions'
import { unsort } from 'array-unsort'; 

const initialState = {
    questions: [],
    isLoading: false,
    error: "error", 
}

export const triviaReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRIVIA_START: 
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questions: action.payload.map(question => new Question(question))
            }
        default: 
            return state; 
    }
}

let lastid = 0; 

class Question {
    constructor(question){
        this.question = question.question 
        this.correctAnswer = question.correct_answer
        const answers = [...question.incorrect_answers, question.correct_answer]
        this.answers = unsort(answers);
        this.id = lastid + 1;
        lastid = this.id;
    }
};

