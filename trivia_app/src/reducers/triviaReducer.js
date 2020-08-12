const initialState = {
    question: {
        category: "", 
        question: "", 
        answers: []
    },
    answer: {
        correct_answer: ""
    }
}

export const triviaReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state; 
    }
}